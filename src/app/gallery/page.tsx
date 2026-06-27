import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Studio Pensieve",
  description: "A visual archive of spaces, materials, and moments from Studio Pensieve.",
};

function img(project: string, filename: string): string {
  return `/Projects/${encodeURIComponent(project)}/${encodeURIComponent(filename)}`;
}

type ImageItem = {
  kind: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: string;
  rotate?: number;
};

type TextItem = {
  kind: "text";
  content: string;
  top: number;
  left: string;
  rotate?: number;
};

type Item = ImageItem | TextItem;

const ITEMS: Item[] = [
  // ── Zone 1 — Vana ─────────────────────────────────────────
  {
    kind: "text",
    content: "Vana,\nBengaluru 2024",
    top: 260,
    left: "5%",
    rotate: -1.5,
  },
  {
    kind: "image",
    src: img("Vana", "8 Living room.jpg"),
    alt: "Vana — living room overview",
    width: 380,
    height: 253,
    top: 130,
    left: "22%",
  },
  {
    kind: "image",
    src: img("Vana", "12 Kitchen.jpg"),
    alt: "Vana — kitchen",
    width: 195,
    height: 292,
    top: 175,
    left: "55%",
    rotate: 1,
  },
  {
    kind: "image",
    src: img("Vana", "17 Master bedroom.jpg"),
    alt: "Vana — master bedroom",
    width: 160,
    height: 240,
    top: 100,
    left: "76%",
    rotate: -0.8,
  },

  // ── Zone 2 — Adapted House ────────────────────────────────
  {
    kind: "image",
    src: img("Adapted House", "1.jpg"),
    alt: "Adapted House — exterior",
    width: 260,
    height: 195,
    top: 540,
    left: "2%",
  },
  {
    kind: "text",
    content: "Considered\nInteriors",
    top: 510,
    left: "30%",
    rotate: 1.2,
  },
  {
    kind: "image",
    src: img("Adapted House", "3.jpg"),
    alt: "Adapted House — facade",
    width: 300,
    height: 225,
    top: 480,
    left: "44%",
    rotate: -1,
  },
  {
    kind: "image",
    src: img("Adapted House", "5.jpg"),
    alt: "Adapted House — detail",
    width: 240,
    height: 160,
    top: 555,
    left: "73%",
  },

  // ── Zone 3 — Verandah House ───────────────────────────────
  {
    kind: "text",
    content: "Light &\nMaterial",
    top: 920,
    left: "11%",
    rotate: -1,
  },
  {
    kind: "image",
    src: img("Verandah House", "2.jpg"),
    alt: "Verandah House — courtyard",
    width: 260,
    height: 195,
    top: 880,
    left: "26%",
    rotate: 0.8,
  },
  {
    kind: "image",
    src: img("Verandah House", "6.jpg"),
    alt: "Verandah House — interior detail",
    width: 175,
    height: 233,
    top: 950,
    left: "55%",
  },
  {
    kind: "image",
    src: img("Verandah House", "4.jpg"),
    alt: "Verandah House — facade",
    width: 260,
    height: 195,
    top: 880,
    left: "73%",
    rotate: -1.2,
  },

  // ── Zone 4 — Olive House ──────────────────────────────────
  {
    kind: "image",
    src: img("Olive House", "3.jpg"),
    alt: "Olive House — interior",
    width: 200,
    height: 300,
    top: 1220,
    left: "5%",
    rotate: 1,
  },
  {
    kind: "image",
    src: img("Olive House", "10.jpg"),
    alt: "Olive House — living space",
    width: 200,
    height: 300,
    top: 1180,
    left: "32%",
  },
  {
    kind: "text",
    content: "Bengaluru\nIndia",
    top: 1350,
    left: "67%",
    rotate: -0.8,
  },
  {
    kind: "image",
    src: img("Olive House", "6.jpg"),
    alt: "Olive House — detail shot",
    width: 185,
    height: 277,
    top: 1240,
    left: "73%",
    rotate: 1.5,
  },
];

const CANVAS_HEIGHT = 1700;

export default function GalleryPage() {
  return (
    <>
      <PageHeader />
      <main className="pt-14 bg-[#faf9f7] min-h-screen">

        {/* ── Header ────────────────────────────────────────── */}
        <div className="mx-auto max-w-6xl px-8 md:px-16 pt-28 pb-16 md:pt-40 md:pb-24">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70 mb-8">
            Visual Archive
          </p>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-3xl">
            Spaces, materials, and moments — gathered over five years of making.
          </h1>
        </div>

        <div className="border-t border-foreground/10" />

        {/* ── Scatter canvas ────────────────────────────────── */}
        <div
          className="relative w-full overflow-x-hidden select-none"
          style={{ minHeight: CANVAS_HEIGHT }}
        >
          {ITEMS.map((item, i) => {
            const transform = item.rotate ? `rotate(${item.rotate}deg)` : undefined;

            if (item.kind === "text") {
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{ top: item.top, left: item.left, transform }}
                >
                  <p className="font-display text-sm font-light italic leading-[1.7] text-foreground/40 whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={i}
                className="absolute"
                style={{ top: item.top, left: item.left, transform }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="object-cover"
                  style={{ width: item.width, height: item.height }}
                />
              </div>
            );
          })}
        </div>

        {/* ── Footer note ───────────────────────────────────── */}
        <div className="border-t border-foreground/10">
          <div className="mx-auto max-w-6xl px-8 md:px-16 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-3">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-foreground/70">Archive</p>
            </div>
            <div className="md:col-span-7 flex flex-col gap-6">
              <p className="text-[15px] font-normal leading-[1.85] text-foreground/80">
                A curated selection of images from completed projects. Photography by Roshan Paliath.
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
