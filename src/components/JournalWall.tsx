"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import journalImages from "@/data/journalImages.json";
import blurUrls from "@/data/blurDataUrls.json";
import JournalLightbox from "@/components/JournalLightbox";

/* ─── data shaping ────────────────────────────────────────────────
   No content-type classification — every image is treated the same.
   Size, rotation, and the decorative treatments below (mat/bare, tape,
   deckled edge) are derived once, deterministically, from each item's
   fixed position in the source manifest (a seeded PRNG, not Math.random
   — must match between server and client render), and applied to only
   a seeded subset of cards so effects don't all stack on one card. */

type ManifestImage = { file: string; width: number; height: number };

export type JournalItem = ManifestImage & {
  rot: number;
  widthPct: number;
  matted: boolean;
  matTone: string;
  deckled: boolean;
  deckledClip?: string;
  hasTape: boolean;
};

function mulberry32(seed: number) {
  let a = seed;
  return function rand() {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Jittered polygon clip-path for a torn/deckled paper edge — consumes
// further calls from the passed-in generator, so callers should compute
// it last for a given item (after any other seeded flags/values).
function deckledClipPath(rand: () => number): string {
  const stepsPerEdge = 6;
  const jitter = 2.2; // % of box size
  const pts: string[] = [];
  const walk = (fx: number, fy: number, tx: number, ty: number) => {
    for (let s = 0; s < stepsPerEdge; s++) {
      const t = s / stepsPerEdge;
      const x = fx + (tx - fx) * t + (rand() - 0.5) * jitter;
      const y = fy + (ty - fy) * t + (rand() - 0.5) * jitter;
      pts.push(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
    }
  };
  walk(0, 0, 100, 0);
  walk(100, 0, 100, 100);
  walk(100, 100, 0, 100);
  walk(0, 100, 0, 0);
  return `polygon(${pts.join(", ")})`;
}

// A handful of width tiers (% of column width) picked per item so the wall
// has size rhythm without any content classification driving it.
const WIDTH_TIERS = [58, 72, 82, 94];
const MAT_TONES = ["#fbfaf7", "#f7f3ec", "#f3ede0"];

const MASTER_ORDER: JournalItem[] = (journalImages as ManifestImage[]).map((img, i) => {
  const rand = mulberry32(i * 97 + 13);
  const tier = WIDTH_TIERS[Math.floor(rand() * WIDTH_TIERS.length)];
  const rot = (rand() - 0.5) * 6; // ±3°, looser/more handled than a machine-neat grid
  const matted = rand() < 0.4;
  const matTone = MAT_TONES[Math.floor(rand() * MAT_TONES.length)];
  const deckled = !matted && rand() < 0.35; // torn edge only makes sense on bare "loose sheet" cards
  const hasTape = rand() < 0.17;
  const deckledClip = deckled ? deckledClipPath(rand) : undefined;
  return {
    ...img,
    rot,
    widthPct: tier,
    matted,
    matTone,
    deckled,
    deckledClip,
    hasTape,
  };
});

/* ─── column packing ──────────────────────────────────────────────
   Shortest-column-first placement (classic masonry packing). Item
   width is a percentage of its column's own width (via widthPct), so
   the packing height estimate only needs relative aspect ratio, not
   measured pixels. */

function packColumns(items: JournalItem[], columnCount: number): JournalItem[][] {
  const cols: JournalItem[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let c = 1; c < columnCount; c++) if (heights[c] < heights[shortest]) shortest = c;
    cols[shortest].push(item);
    const aspect = item.width / item.height;
    heights[shortest] += item.widthPct / aspect + 12; // +12: rough gap allowance
  }
  return cols;
}

function useColumnCount() {
  const [columns, setColumns] = useState(1);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setColumns(w >= 1536 ? 4 : w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return columns;
}

/* ─── card ────────────────────────────────────────────────────── */

function JournalCard({
  item, priority, onOpen, registerRef,
}: {
  item: JournalItem;
  priority: boolean;
  onOpen: () => void;
  registerRef: (file: string, el: HTMLDivElement | null) => void;
}) {
  const blur = blurUrls[`public${item.file}` as keyof typeof blurUrls];

  return (
    <div
      ref={(el) => registerRef(item.file, el)}
      className="mx-auto"
      style={{ width: `${item.widthPct}%`, transform: `rotate(${item.rot}deg)` }}
    >
      <button onClick={onOpen} className="group block w-full text-left relative">
        {item.hasTape && (
          <span
            aria-hidden
            className="absolute -top-2.5 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rotate-[-3deg]"
            style={{ background: "rgba(214, 199, 168, 0.55)", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}
          />
        )}
        <div
          className="relative transition-all duration-300 ease-out group-hover:-translate-y-1"
          style={{
            background: item.matted ? item.matTone : "transparent",
            padding: item.matted ? "10px" : 0,
            borderRadius: item.matted ? "2px" : 0,
            boxShadow: item.matted
              ? "0 3px 16px rgba(30,24,16,0.10), 0 1px 3px rgba(30,24,16,0.06)"
              : "0 2px 12px rgba(30,24,16,0.08), 0 1px 3px rgba(30,24,16,0.06)",
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: item.matted ? "1px" : "3px",
              clipPath: item.deckled ? item.deckledClip : undefined,
            }}
          >
            <Image
              src={item.file}
              alt=""
              width={item.width}
              height={item.height}
              className="block w-full h-auto"
              placeholder={blur ? "blur" : "empty"}
              blurDataURL={blur}
              priority={priority}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, (max-width: 1536px) 30vw, 22vw"
            />
          </div>
        </div>
      </button>
    </div>
  );
}

/* ─── wall ────────────────────────────────────────────────────── */

export default function JournalWall() {
  const columns = useColumnCount();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const columnsData = useMemo(() => packColumns(MASTER_ORDER, columns), [columns]);

  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const registerRef = (file: string, el: HTMLDivElement | null) => {
    if (el) cardRefs.current.set(file, el);
    else cardRefs.current.delete(file);
  };

  // Scroll reveal: fade + rise each card in once as it enters the viewport.
  useEffect(() => {
    const els = Array.from(cardRefs.current.values());
    gsap.set(els, { opacity: 0, y: 24 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.6, delay: (i % 4) * 0.06, ease: "power2.out" });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [columns]);

  return (
    <main
      className="pt-14 min-h-screen relative"
      style={{
        backgroundImage: [
          // gentle paper-stock drift — cycles through the same tones used for card mats
          "repeating-linear-gradient(to bottom, #fbfaf7 0px, #f7f3ec 800px, #f3ede0 1600px, #f7f3ec 2400px, #fbfaf7 3200px)",
          // faint blueprint-grid hint, much quieter than the old canvas's version
          "linear-gradient(rgba(60,80,140,0.03) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(60,80,140,0.03) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "100% 3200px, 120px 120px, 120px 120px",
      }}
    >
      {/* larger-scale mottling — slow tonal clouding, scrolls with the page.
          mix-blend-mode: multiply so the noise shades the paper color instead
          of sitting on top of it like a flat gray overlay. */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.05]"
        style={{ mixBlendMode: "multiply" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="journal-mottle">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#journal-mottle)" />
      </svg>

      {/* directional fiber streaks — anisotropic frequency for a linear, papery
          (not TV-static) noise character */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045]"
        style={{ mixBlendMode: "multiply" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="journal-fiber">
          <feTurbulence type="turbulence" baseFrequency="0.9 0.04" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#journal-fiber)" />
      </svg>

      {/* fine paper grain — scrolls with the page, reads as part of the sheet rather than a screen filter */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.09]"
        style={{ mixBlendMode: "multiply" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="journal-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#journal-grain)" />
      </svg>

      {/* whisper-thin edge vignette — viewport-relative (fixed), not page-relative, so it
          always reads as "current view's edges", not anchored to the document's top */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 45%, transparent 55%, rgba(40,30,15,0.05) 100%)" }}
      />

      {/* spine / margin rule, evoking a notebook's binding margin */}
      <div
        aria-hidden
        className="hidden md:block absolute inset-y-0 left-6 w-px pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(120,90,50,0.14) 8%, rgba(120,90,50,0.14) 92%, transparent)" }}
      />

      <div className="relative px-8 md:px-14 pt-24 pb-10 md:pt-32 md:pb-14">
        <h1 className="font-handwritten text-6xl md:text-8xl font-semibold tracking-tight">Journal</h1>
        <p className="font-handwritten text-lg md:text-2xl text-foreground/45 mt-1">
          sketches, moments, and materials — collected along the way
        </p>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8 pb-20 md:pb-28 flex gap-4 md:gap-6 items-start">
        {columnsData.map((col, ci) => (
          <div key={ci} className="flex-1 min-w-0 flex flex-col gap-7 md:gap-9">
            {col.map((item) => {
              const curatedIndex = MASTER_ORDER.indexOf(item);
              return (
                <JournalCard
                  key={item.file}
                  item={item}
                  priority={curatedIndex < 6}
                  onOpen={() => setOpenIndex(curatedIndex)}
                  registerRef={registerRef}
                />
              );
            })}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <JournalLightbox
          items={MASTER_ORDER}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(dir) => setOpenIndex((i) => {
            if (i === null) return i;
            const next = i + dir;
            if (next < 0 || next >= MASTER_ORDER.length) return i;
            return next;
          })}
        />
      )}
    </main>
  );
}
