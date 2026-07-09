"use client";

import { useEffect, useRef } from "react";
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
  | { type: "duo";    items: [ProjectImage, ProjectImage] }
  | { type: "trio";   items: [ProjectImage, ProjectImage, ProjectImage] }
  | { type: "quad";   items: [ProjectImage, ProjectImage, ProjectImage, ProjectImage] };

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
      const next = images[i + 1];
      if (cur.pairedCaption) {
        const layout = cur.layout ?? "duo";
        const [n1, n2, n3] = [images[i+1], images[i+2], images[i+3]];
        if (layout === "quad" && n1 && n2 && n3) {
          blocks.push({ type: "quad", items: [cur, n1, n2, n3] } as GalleryBlock);
          i += 4;
        } else if (layout === "trio" && n1 && n2) {
          blocks.push({ type: "trio", items: [cur, n1, n2] } as GalleryBlock);
          i += 3;
        } else if (n1 && n1.orientation === "portrait") {
          blocks.push({ type: "duo", items: [cur, n1] } as GalleryBlock);
          i += 2;
        } else {
          blocks.push({ type: "single", items: [cur] } as GalleryBlock);
          i++;
        }
      } else if (cur.caption) {
        // captioned portrait → always solo; caption in right column
        blocks.push({ type: "single", items: [cur] } as GalleryBlock);
        i++;
      } else {
        // uncaptioned portrait — pair with next uncaptioned portrait
        if (next && next.orientation === "portrait" && !next.caption && !next.pairedCaption) {
          blocks.push({ type: "duo", items: [cur, next] } as GalleryBlock);
          i += 2;
        } else {
          blocks.push({ type: "single", items: [cur] } as GalleryBlock);
          i++;
        }
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

function itemAlt(item: ProjectImage, title: string, fallback: string): string {
  return item.caption ?? item.pairedCaption?.[0] ?? `${title} — ${fallback}`;
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
    <div className="flex flex-col gap-14 md:gap-20">
      {blocks.map((block, bi) => {
        const item = block.items[0];
        const key  = offset + bi;

        if (block.type === "single" && item.orientation === "landscape") {
          return (
            <RevealBlock key={key}>
              <GalleryImage
                src={item.src}
                alt={itemAlt(item, title, `view ${key + 1}`)}
                sizes="(max-width: 768px) calc(100vw - 4rem), calc(100vw - 7rem)"
                aspect="3/2"
              />
              {item.caption && (
                <p className="mt-6 text-[15px] leading-relaxed text-foreground/50 max-w-prose">{item.caption}</p>
              )}
            </RevealBlock>
          );
        }

        if (block.type === "single" && item.orientation === "portrait") {
          if (item.caption) {
            const align = item.captionAlign ?? "top";
            const gridAlign = align === "bottom" ? "items-end" : align === "center" ? "items-center" : "items-start";
            return (
              <div key={key} className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[28px] ${gridAlign}`}>
                <RevealBlock>
                  <GalleryImage
                    src={item.src}
                    alt={itemAlt(item, title, `view ${key + 1}`)}
                    sizes="(max-width: 768px) 100vw, calc(50vw - 4rem)"
                    aspect="2/3"
                  />
                </RevealBlock>
                <RevealBlock delay={0.1}>
                  <p className="text-[15px] leading-relaxed text-foreground/50">{item.caption}</p>
                </RevealBlock>
              </div>
            );
          }
          return (
            <div key={key} className="grid grid-cols-1 md:grid-cols-2 md:gap-[28px]">
              <RevealBlock>
                <GalleryImage
                  src={item.src}
                  alt={itemAlt(item, title, `view ${key + 1}`)}
                  sizes="(max-width: 768px) 100vw, calc(50vw - 4rem)"
                  aspect="2/3"
                />
              </RevealBlock>
            </div>
          );
        }

        const pairedCaptions = block.items[0].pairedCaption ?? [];

        if (block.type === "quad") {
          return (
            <div key={key} className="flex flex-col gap-6 md:gap-8">
              <div className="grid grid-cols-2 gap-3 md:gap-[28px]">
                {block.items.map((img, col) => (
                  <RevealBlock key={col} delay={col * 0.05}>
                    <GalleryImage
                      src={img.src}
                      alt={col === 0 ? itemAlt(img, title, `view ${key + 1}`) : `${title} — view ${key + 1}.${col + 1}`}
                      sizes="(max-width: 768px) 50vw, 25vw"
                      aspect="2/3"
                    />
                  </RevealBlock>
                ))}
              </div>
              {pairedCaptions.length > 0 && (
                <RevealBlock className="flex flex-col gap-4">
                  {pairedCaptions.map((p, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-foreground/50">{p}</p>
                  ))}
                </RevealBlock>
              )}
            </div>
          );
        }

        if (block.type === "trio") {
          return (
            <div key={key} className="flex flex-col gap-6 md:gap-8">
              <div className="grid grid-cols-3 gap-2 md:gap-[20px]">
                {block.items.map((img, col) => (
                  <RevealBlock key={col} delay={col * 0.05}>
                    <GalleryImage
                      src={img.src}
                      alt={col === 0 ? itemAlt(img, title, `view ${key + 1}`) : `${title} — view ${key + 1}.${col + 1}`}
                      sizes="(max-width: 768px) 33vw, 20vw"
                      aspect="2/3"
                    />
                  </RevealBlock>
                ))}
              </div>
              {pairedCaptions.length > 0 && (
                <RevealBlock className="flex flex-col gap-4">
                  {pairedCaptions.map((p, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-foreground/50">{p}</p>
                  ))}
                </RevealBlock>
              )}
            </div>
          );
        }

        // duo
        return (
          <div key={key} className="flex flex-col gap-6 md:gap-8">
            <div className="grid grid-cols-2 gap-3 md:gap-[28px]">
              {block.items.map((img, col) => (
                <RevealBlock key={col} delay={col * 0.1}>
                  <GalleryImage
                    src={img.src}
                    alt={col === 0 ? itemAlt(img, title, `view ${key + 1}`) : `${title} — view ${key + 1}.${col + 1}`}
                    sizes="(max-width: 768px) 50vw, calc(50vw - 4rem)"
                    aspect="2/3"
                  />
                </RevealBlock>
              ))}
            </div>
            {pairedCaptions.length > 0 && (
              <RevealBlock className="flex flex-col gap-4">
                {pairedCaptions.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-foreground/50">{p}</p>
                ))}
              </RevealBlock>
            )}
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
    project.hero ??
    project.images?.find(img => img.orientation === "landscape")?.src;

  const desc          = project.description ?? [];
  const galleryImages = project.images ?? [];
  const blocks        = buildBlocks(galleryImages);


  return (
    <div className="bg-[#faf9f7] min-h-screen">
      <ScrollProgress />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <div className="relative h-dvh w-full overflow-hidden">
        <div className={`absolute inset-0 ${project.bg}`}>
          {heroSrc && (
            <Image
              src={heroSrc}
              alt={project.title}
              fill
              sizes="100vw"
              priority
              className="object-cover hero-cover"
              style={{
                "--hero-pos": project.heroPosition,
                "--hero-pos-mobile": project.heroPositionMobile,
                "--hero-pos-wide": project.heroPositionWide,
                "--hero-zoom-mobile": project.heroZoomMobile,
                "--hero-origin-mobile": project.heroOriginMobile,
              } as React.CSSProperties}
              placeholder={project.blur ? "blur" : "empty"}
              blurDataURL={project.blur}
            />
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
      <RevealBlock className="px-8 md:px-14 py-8 border-b border-foreground/[0.07] flex flex-wrap items-baseline gap-x-5 md:gap-x-10 gap-y-2">
        <span className="text-[10px] tracking-[0.28em] uppercase text-foreground/35">{project.index}</span>
        <span className="font-display text-sm font-medium">{project.title}</span>
        {project.location !== "—" && <span className="text-[11px] text-foreground/40">{project.location}</span>}
        {project.year     !== "—" && <span className="text-[11px] text-foreground/40">{project.year}</span>}
        {project.size     !== "—" && <span className="text-[11px] text-foreground/40">{project.size}</span>}
        {project.category !== "—" && (
            <span className="text-[11px] text-foreground/40">
              {project.category.toLowerCase().includes("architecture") ? "Architecture" : "Interiors"}
            </span>
          )}
      </RevealBlock>

      {/* ── Details: description + credits ── */}
      <RevealBlock className="px-8 md:px-14 pt-20 pb-20 md:pt-28 md:pb-28 border-b border-foreground/[0.07]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">

          {/* Description paragraphs + credits */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {desc.map((para, i) => (
              <p key={i} className="text-[15px] font-normal leading-[1.85] text-foreground/70">
                {para}
              </p>
            ))}

            {project.credits && (
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8 mt-4">
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

        </div>
      </RevealBlock>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      {blocks.length > 0 && (
        <div className="px-8 md:px-14 pt-20">
          <GallerySection blocks={blocks} title={project.title} offset={0} />
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
