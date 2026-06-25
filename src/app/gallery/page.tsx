import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Studio Pensieve",
  description: "A visual archive of spaces, materials, and moments from Studio Pensieve.",
};

function img(filename: string): string {
  return `/Projects/EMB%20Prestine/${encodeURIComponent(filename)}`;
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
  // ── Zone 1 ──────────────────────────────────────────────
  {
    kind: "text",
    content: "The Whitmore\nResidence, 2024",
    top: 260,
    left: "5%",
    rotate: -1.5,
  },
  {
    kind: "image",
    src: img("RP 16 (3).jpg"),
    alt: "Living space overview",
    width: 380,
    height: 285,
    top: 130,
    left: "22%",
  },
  {
    kind: "image",
    src: img("Hero Image.jpg"),
    alt: "Entrance hall",
    width: 260,
    height: 195,
    top: 175,
    left: "52%",
    rotate: 1,
  },
  {
    kind: "image",
    src: img("RP 12 (3).jpg"),
    alt: "Detail",
    width: 160,
    height: 213,
    top: 100,
    left: "76%",
    rotate: -0.8,
  },

  // ── Zone 2 ──────────────────────────────────────────────
  {
    kind: "image",
    src: img("RP 1 (1).jpg"),
    alt: "Living room",
    width: 195,
    height: 260,
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
    src: img("RP 3 (1).jpg"),
    alt: "Bedroom",
    width: 225,
    height: 300,
    top: 480,
    left: "43%",
    rotate: -1,
  },
  {
    kind: "image",
    src: img("RP 8 (3).jpg"),
    alt: "Kitchen",
    width: 320,
    height: 240,
    top: 525,
    left: "64%",
  },

  // ── Zone 3 ──────────────────────────────────────────────
  {
    kind: "text",
    content: "Light &\nMaterial",
    top: 920,
    left: "11%",
    rotate: -1,
  },
  {
    kind: "image",
    src: img("RP 5 (3).jpg"),
    alt: "Bathroom",
    width: 200,
    height: 267,
    top: 880,
    left: "28%",
    rotate: 0.8,
  },
  {
    kind: "image",
    src: img("RP 10 (3).jpg"),
    alt: "Study",
    width: 175,
    height: 233,
    top: 950,
    left: "52%",
  },
  {
    kind: "image",
    src: img("RP 11 (3).jpg"),
    alt: "Guest room",
    width: 260,
    height: 347,
    top: 875,
    left: "70%",
    rotate: -1.2,
  },

  // ── Zone 4 ──────────────────────────────────────────────
  {
    kind: "image",
    src: img("RP 2 (1).jpg"),
    alt: "Dining area",
    width: 215,
    height: 287,
    top: 1220,
    left: "5%",
    rotate: 1,
  },
  {
    kind: "image",
    src: img("RP 7 (3).jpg"),
    alt: "Balcony",
    width: 375,
    height: 281,
    top: 1180,
    left: "30%",
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
    src: img("RP 4 (1).jpg"),
    alt: "Detail shot",
    width: 185,
    height: 247,
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
