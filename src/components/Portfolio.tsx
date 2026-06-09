"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { usePageTransition } from "@/components/TransitionProvider";

function landscapeSrc(project: Project): string | undefined {
  return (
    project.images?.find(img => img.orientation === "landscape")?.src ??
    project.cover
  );
}

export default function Portfolio({ limit }: { limit?: number }) {
  const { navigate } = usePageTransition();
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const visible = limit ? projects.slice(0, limit) : projects;

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  function onMouseDown(e: React.MouseEvent) {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft, moved: false };
    el.style.cursor = "grabbing";
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!drag.current.active || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.2;
    if (Math.abs(walk) > 5) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.scrollLeft - walk;
  }

  function onMouseUp() {
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }

  function onTouchStart(e: React.TouchEvent) {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.touches[0].pageX - el.offsetLeft, scrollLeft: el.scrollLeft, moved: false };
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!drag.current.active || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - drag.current.startX) * 1.2;
    if (Math.abs(walk) > 5) drag.current.moved = true;
    trackRef.current.scrollLeft = drag.current.scrollLeft - walk;
  }

  function onTouchEnd() {
    drag.current.active = false;
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (pillRef.current) {
      pillRef.current.style.left = `${e.clientX}px`;
      pillRef.current.style.top  = `${e.clientY}px`;
    }
  }

  function handleClick(e: React.MouseEvent<HTMLElement>, slug: string, color: string) {
    if (drag.current.moved) return;
    const imageEl = e.currentTarget.querySelector<HTMLElement>("[data-project-image]");
    const rect = imageEl?.getBoundingClientRect();
    const imgEl = imageEl?.querySelector<HTMLImageElement>("img");
    const imageSrc = imgEl?.currentSrc || imgEl?.src;
    navigate(`/projects/${slug}`, { rect, color, imageSrc });
  }

  return (
    <section id="portfolio" className="relative pb-16" onMouseMove={handleMouseMove}>

      {/* Dynamic per-project gradient layers — cross-fade on hover */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {visible.map((p) => (
          <div
            key={p.slug}
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              opacity: hoveredSlug === p.slug ? 1 : 0,
              background: `radial-gradient(ellipse 70% 55% at 50% 85%, ${p.color}99 0%, transparent 65%)`,
              filter: "blur(32px)",
            }}
          />
        ))}
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="relative flex gap-3 overflow-x-auto cursor-grab select-none px-8 md:px-14"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {visible.map((project, i) => (
          <article
            key={project.slug}
            className="shrink-0 group cursor-pointer"
            onClick={(e) => handleClick(e, project.slug, project.color)}
            onMouseEnter={() => setHoveredSlug(project.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {/* Image — fixed height container, landscape source */}
            <div
              data-project-image
              className="relative overflow-hidden"
              style={{ height: "clamp(200px, min(52vw, 65vh), 700px)", aspectRatio: "3/2" }}
            >
              {landscapeSrc(project) ? (
                <Image
                  src={landscapeSrc(project)!}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 65vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  priority={i === 0}
                  placeholder={project.blur ? "blur" : "empty"}
                  blurDataURL={project.blur}
                />
              ) : (
                <div className={`absolute inset-0 ${project.bg}`} />
              )}

              {/* Hover: subtle dark veil */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Caption */}
            <div className="pt-4 pb-8">
              <h3 className="text-sm font-medium leading-snug mb-1">{project.title}</h3>
              <p className="text-sm text-foreground/60 font-normal">{project.location}</p>
            </div>
          </article>
        ))}

        {/* Trailing gap */}
        <div className="shrink-0 w-px" />
      </div>

      {/* Cursor-following open pill — hidden on touch devices */}
      <div
        ref={pillRef}
        className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ opacity: hoveredSlug && !isTouch ? 1 : 0 }}
      >
        <span
          className="flex items-center gap-2 text-foreground text-[11px] font-medium tracking-wide px-4 py-2.5 rounded-full transition-colors duration-500"
          style={{ backgroundColor: visible.find(p => p.slug === hoveredSlug)?.color ?? "#faf9f7" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 shrink-0" />
          open
        </span>
      </div>
    </section>
  );
}
