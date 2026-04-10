"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project, ProjectImage } from "@/data/projects";
import { projects } from "@/data/projects";
import { usePageTransition } from "@/components/TransitionProvider";
import { useMenu } from "@/components/Menu";

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el  = document.documentElement;
      const pct = el.scrollHeight - el.clientHeight > 0
        ? el.scrollTop / (el.scrollHeight - el.clientHeight)
        : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-px bg-foreground/10 pointer-events-none">
      <div ref={barRef} className="h-full bg-foreground/50 origin-left" style={{ transform: "scaleX(0)" }} />
    </div>
  );
}

type GalleryBlock =
  | { type: "single"; items: [ProjectImage] }
  | { type: "duo";    items: [ProjectImage, ProjectImage] };

/**
 * Rules:
 *  - Landscape images are always solo.
 *  - Portrait images are paired with the next portrait (max 2).
 */
function buildBlocks(images: ProjectImage[]): GalleryBlock[] {
  const blocks: GalleryBlock[] = [];
  let i = 0;

  while (i < images.length) {
    const cur = images[i];
    if (cur.orientation === "landscape") {
      blocks.push({ type: "single", items: [cur] } as GalleryBlock);
      i++;
    } else {
      // portrait — look ahead for a second portrait to pair with
      const next = images[i + 1];
      if (next && next.orientation === "portrait") {
        blocks.push({ type: "duo", items: [cur, next] } as GalleryBlock);
        i += 2;
      } else {
        blocks.push({ type: "single", items: [cur] } as GalleryBlock);
        i++;
      }
    }
  }

  return blocks;
}

function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 88%" },
        opacity: 0,
        y: 22,
        duration: 0.9,
        delay,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function GalleryImage({
  src,
  alt,
  sizes = "100vw",
  aspect = "3/2",
}: {
  src?: string;
  alt: string;
  sizes?: string;
  aspect?: string;
}) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-stone-100" />
      )}
    </div>
  );
}

function GallerySection({
  blocks,
  title,
  offset = 0,
}: {
  blocks: GalleryBlock[];
  title: string;
  offset?: number;
}) {
  return (
    <div className="flex flex-col gap-[46px]">
      {blocks.map((block, bi) => {
        const item = block.items[0];
        const key  = offset + bi;

        if (block.type === "single" && item.orientation === "landscape") {
          return (
            <RevealBlock key={key}>
              <GalleryImage
                src={item.src}
                alt={`${title} — ${key + 1}`}
                sizes="(max-width: 768px) calc(100vw - 4rem), calc(100vw - 7rem)"
                aspect="3/2"
              />
            </RevealBlock>
          );
        }

        if (block.type === "single" && item.orientation === "portrait") {
          return (
            <div key={key} className="grid grid-cols-2 gap-[28px]">
              <RevealBlock>
                <GalleryImage
                  src={item.src}
                  alt={`${title} — ${key + 1}`}
                  sizes="(max-width: 768px) 50vw, calc(50vw - 4rem)"
                  aspect="2/3"
                />
              </RevealBlock>
              <div />
            </div>
          );
        }

        return (
          <div key={key} className="grid grid-cols-2 gap-[28px]">
            {block.items.map((img, col) => (
              <RevealBlock key={col} delay={col * 0.1}>
                <GalleryImage
                  src={img.src}
                  alt={`${title} — ${key + 1}.${col + 1}`}
                  sizes="(max-width: 768px) 50vw, calc(50vw - 4rem)"
                  aspect="2/3"
                />
              </RevealBlock>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function ProjectPageClient({ project }: { project: Project }) {
  const { navigate } = usePageTransition();
  const { openMenu } = useMenu();

  const idx  = projects.findIndex(p => p.slug === project.slug);
  const prev = idx > 0                  ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  const heroSrc =
    project.images?.find(img => img.orientation === "landscape")?.src ??
    project.hero;

  const desc   = project.description ?? [];
  const blocks = buildBlocks(project.images ?? []);

  // Split gallery into three roughly equal sections
  const cut1 = Math.ceil(blocks.length / 3);
  const cut2 = Math.ceil((blocks.length * 2) / 3);
  const part1 = blocks.slice(0, cut1);
  const part2 = blocks.slice(cut1, cut2);
  const part3 = blocks.slice(cut2);

  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <ScrollProgress />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className={`absolute inset-0 ${project.bg}`}>
          {heroSrc && (
            <Image src={heroSrc} alt={project.title} fill sizes="100vw" priority className="object-cover" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute top-5 right-5 md:top-7 md:right-7">
          <button
            onClick={openMenu}
            className="bg-black/75 hover:bg-black/90 transition-colors text-white text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 rounded-full backdrop-blur-sm"
          >
            Menu
          </button>
        </div>
        <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10">
          <h1 className="font-display text-2xl font-medium text-white md:text-3xl lg:text-4xl leading-tight">
            {project.title}
          </h1>
        </div>
        <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10">
          <p className="text-[11px] tracking-[0.18em] uppercase text-white/45">Scroll to explore</p>
        </div>
      </div>

      {/* ── Metadata strip ───────────────────────────────────────── */}
      <RevealBlock className="px-8 md:px-14 py-8 border-b border-foreground/[0.07] flex flex-wrap items-baseline gap-x-10 gap-y-2">
        <span className="text-[10px] tracking-[0.28em] uppercase text-foreground/35">{project.index}</span>
        <span className="font-display text-sm font-medium">{project.title}</span>
        {project.location !== "—" && <span className="text-[11px] text-foreground/40">{project.location}</span>}
        {project.year     !== "—" && <span className="text-[11px] text-foreground/40">{project.year}</span>}
        {project.size     !== "—" && <span className="text-[11px] text-foreground/40">{project.size}</span>}
        {project.category !== "—" && <span className="text-[11px] text-foreground/40">{project.category}</span>}
      </RevealBlock>

      {/* ── Details: description + credits  |  floor plan + rooms ── */}
      <RevealBlock className="px-8 md:px-14 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-foreground/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* Left col — description paragraphs + credits */}
          <div className="md:col-span-7 flex flex-col gap-10">
            {desc.map((para, i) => (
              <p key={i} className="text-[15px] font-normal leading-[1.85] text-foreground/70">
                {para}
              </p>
            ))}

            {project.credits && (
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-4">
                {project.credits.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[10px] tracking-[0.22em] uppercase text-foreground/38 mb-1.5">{label}</p>
                    {value.split("\n").map((line, i) => (
                      <p key={i} className="text-sm font-medium leading-snug">{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right col — floor plan + rooms */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {project.floorPlan ? (
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.floorPlan}
                  alt="Floor plan"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-[4/3] bg-stone-50 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/30">Floor Plan</span>
              </div>
            )}

            {project.rooms && (
              <div className="grid grid-cols-2 gap-x-8 gap-y-1.5">
                {project.rooms.map(({ number, name }) => (
                  <div key={number} className="flex items-baseline gap-3 py-2 border-b border-foreground/[0.06]">
                    <span className="text-[10px] text-foreground/30 shrink-0">{String(number).padStart(2, "0")}</span>
                    <span className="text-sm text-foreground/65">{name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </RevealBlock>

      {/* ── Gallery part 1 ───────────────────────────────────────── */}
      {part1.length > 0 && (
        <div className="px-8 md:px-14 pt-20">
          <GallerySection blocks={part1} title={project.title} offset={0} />
        </div>
      )}


      {/* ── Gallery part 2 ───────────────────────────────────────── */}
      {part2.length > 0 && (
        <div className="px-8 md:px-14">
          <GallerySection blocks={part2} title={project.title} offset={cut1} />
        </div>
      )}


      {/* ── Gallery part 3 ───────────────────────────────────────── */}
      {part3.length > 0 && (
        <div className="px-8 md:px-14">
          <GallerySection blocks={part3} title={project.title} offset={cut2} />
        </div>
      )}

      {/* ── Footer nav ───────────────────────────────────────────── */}
      <div className="border-t border-foreground/10 mt-28 md:mt-44">
        <div className="grid grid-cols-3 divide-x divide-foreground/10">
          <button onClick={() => navigate("/projects")} className="px-8 md:px-12 py-10 text-left group">
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 mb-2 group-hover:text-foreground/70 transition-colors">All Projects</p>
            <p className="text-[11px] tracking-[0.15em] text-foreground/30 flex items-center gap-2">
              <span className="h-px w-6 bg-foreground/30 inline-block" /> Index
            </p>
          </button>
          <button onClick={() => prev && navigate(`/projects/${prev.slug}`)} disabled={!prev} className="px-8 md:px-12 py-10 text-left group disabled:opacity-25">
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 mb-2 group-hover:text-foreground/70 transition-colors">← Previous</p>
            <p className="font-display text-sm font-medium">{prev?.title ?? "—"}</p>
          </button>
          <button onClick={() => next && navigate(`/projects/${next.slug}`)} disabled={!next} className="px-8 md:px-12 py-10 text-right group disabled:opacity-25 ml-auto w-full">
            <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/40 mb-2 group-hover:text-foreground/70 transition-colors">Next →</p>
            <p className="font-display text-sm font-medium">{next?.title ?? "—"}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
