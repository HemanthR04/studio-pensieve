"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { usePageTransition } from "@/components/TransitionProvider";

const ALL_CATEGORIES = [
  "All",
  ...Array.from(new Set(projects.map(p => p.category).filter(c => c !== "—"))),
];

function landscapeSrc(project: Project): string | undefined {
  return (
    project.images?.find(img => img.orientation === "landscape")?.src ??
    project.cover
  );
}

// Second distinct image to show on hover
function hoverSrc(project: Project): string | undefined {
  const landscapes = project.images?.filter(img => img.orientation === "landscape") ?? [];
  if (landscapes.length > 1) return landscapes[1].src;
  // fall back to first portrait if only one landscape
  return project.images?.find(img => img.orientation === "portrait")?.src;
}

export default function ProjectsPageClient() {
  const { navigate } = usePageTransition();
  const [hoveredSlug, setHoveredSlug]     = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const pillRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // Staggered entry animation — re-runs on filter change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.07,
        ease: "power3.out",
        clearProps: "all",
      });
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  function handleMouseMove(e: React.MouseEvent) {
    if (pillRef.current) {
      pillRef.current.style.left = `${e.clientX}px`;
      pillRef.current.style.top  = `${e.clientY}px`;
    }
  }

  function handleClick(e: React.MouseEvent<HTMLElement>, project: Project) {
    const imageEl = e.currentTarget.querySelector<HTMLElement>("[data-cover]");
    const rect     = imageEl?.getBoundingClientRect();
    const imgEl    = imageEl?.querySelector<HTMLImageElement>("img");
    const imageSrc = imgEl?.currentSrc || imgEl?.src;
    navigate(`/projects/${project.slug}`, { rect, color: project.color, imageSrc });
  }

  return (
    <div className="px-8 md:px-16 pt-28 md:pt-40 pb-24" onMouseMove={handleMouseMove}>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 items-start">

        {/* ── Left col: heading + filter ── */}
        <div className="md:sticky md:top-20 mb-10 md:mb-0">
          <h1 className="font-display text-2xl md:text-3xl font-medium leading-[1.2] mb-1">
            All Projects
          </h1>
          <p className="text-[11px] tracking-[0.2em] uppercase text-foreground/30 mb-8">
            {String(filtered.length).padStart(2, "0")} Projects
          </p>

          {/* Category filter */}
          <div className="flex flex-row flex-wrap gap-3 md:flex-col md:gap-2">
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                  activeCategory === cat
                    ? "text-foreground font-medium"
                    : "text-foreground/35 hover:text-foreground/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Right 3/4: project grid ── */}
        <div
          ref={gridRef}
          className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10"
        >
          {filtered.map((project, i) => {
            const src      = landscapeSrc(project);
            const hover    = hoverSrc(project);
            const isHovered = hoveredSlug === project.slug;
            const meta = [
              project.category !== "—" ? project.category : null,
              project.year     !== "—" ? project.year     : null,
            ].filter(Boolean).join(" · ");

            return (
              <article
                key={project.slug}
                className="project-card cursor-pointer"
                onClick={(e) => handleClick(e, project)}
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                {/* Image — default + hover crossfade */}
                <div data-cover className="relative overflow-hidden aspect-[4/3] bg-stone-100 mb-3">
                  {src && (
                    <Image
                      src={src}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      priority={i < 6}
                      placeholder={project.blur ? "blur" : "empty"}
                      blurDataURL={project.blur}
                    />
                  )}
                  {hover && (
                    <Image
                      src={hover}
                      alt={`${project.title} — alternate`}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      style={{
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 500ms ease",
                      }}
                    />
                  )}
                </div>

                {/* Caption */}
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-0.5">
                    <p className="text-sm font-medium leading-snug">{project.title}</p>
                    <span className="text-[11px] text-foreground/25 shrink-0">{project.index}</span>
                  </div>
                  {meta && (
                    <p className="text-[11px] text-foreground/40">{meta}</p>
                  )}
                  {project.location !== "—" && (
                    <p className="text-[11px] text-foreground/30 mt-0.5">{project.location}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Cursor pill */}
      <div
        ref={pillRef}
        className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: hoveredSlug ? 1 : 0, transition: "opacity 0.2s" }}
      >
        <span
          className="flex items-center gap-2 text-foreground text-[11px] font-medium tracking-wide px-4 py-2.5 rounded-full"
          style={{
            backgroundColor: projects.find(p => p.slug === hoveredSlug)?.color ?? "#faf9f7",
            transition: "background-color 0.4s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 shrink-0" />
          open
        </span>
      </div>
    </div>
  );
}
