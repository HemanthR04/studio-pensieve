"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import journalImages from "@/data/journalImages.json";

/* ─── layout generation ───────────────────────────────────────────
   The journal source images are unsorted phone/camera exports, not a
   hand-picked story, so positions/rotations/sizes are generated
   deterministically from each image's index + aspect ratio (a seeded
   PRNG, not Math.random — must match between server and client render). */

type ManifestImage = { file: string; width: number; height: number };

type ImgItem = {
  src: string;
  w: number;
  h: number;
  x: number;
  y: number;
  z: number;
  rot: number;
  priority: boolean;
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

const CLUSTER_SPACING_X = 600;
const START_X = 70;

function boxFor(img: ManifestImage, longEdge: number): { w: number; h: number } {
  const ratio = img.width / img.height;
  return ratio >= 1
    ? { w: Math.round(longEdge), h: Math.round(longEdge / ratio) }
    : { w: Math.round(longEdge * ratio), h: Math.round(longEdge) };
}

function buildItems(images: ManifestImage[]): ImgItem[] {
  const items: ImgItem[] = [];

  for (let c = 0; c * 2 < images.length; c++) {
    const hero = images[c * 2];
    const sat  = images[c * 2 + 1] as ManifestImage | undefined;
    const rand = mulberry32(c * 97 + 13);

    const baseX = START_X + c * CLUSTER_SPACING_X;
    // Gentle wave so clusters don't sit on a single horizontal line
    const baseY = 140 + Math.sin(c * 0.7) * 90 + (rand() - 0.5) * 60;

    const heroBox = boxFor(hero, 250 + rand() * 70);
    const heroX = baseX;
    const heroY = Math.max(40, baseY);
    items.push({
      src: hero.file,
      w: heroBox.w,
      h: heroBox.h,
      x: heroX,
      y: heroY,
      z: 25 + Math.round(rand() * 20),
      rot: (rand() - 0.5) * 6,
      priority: c < 4,
    });

    if (sat) {
      const satBox = boxFor(sat, 130 + rand() * 60);
      const satX = heroX + heroBox.w * (0.45 + rand() * 0.2);
      const satY = heroY + heroBox.h * (0.4 + rand() * 0.3);
      items.push({
        src: sat.file,
        w: satBox.w,
        h: satBox.h,
        x: satX,
        y: satY,
        z: 55 + Math.round(rand() * 20),
        rot: (rand() - 0.5) * 18,
        priority: c < 4,
      });
    }
  }

  return items;
}

/* ─── component ───────────────────────────────────────────────── */

export default function JournalCanvas() {
  const sceneRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => buildItems(journalImages as ManifestImage[]), []);

  const bounds = useMemo(() => {
    const maxX = Math.max(...items.map(it => it.x + it.w));
    const maxY = Math.max(...items.map(it => it.y + it.h));
    return {
      w: maxX + 200,
      h: Math.max(700, maxY + 200),
      cx: (Math.min(...items.map(it => it.x)) + maxX) / 2,
      cy: (Math.min(...items.map(it => it.y)) + maxY) / 2,
    };
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene  = sceneRef.current;
    if (!canvas || !scene) return;

    const offset = {
      x: Math.round(window.innerWidth  / 2 - bounds.cx),
      y: Math.round(window.innerHeight / 2 - bounds.cy),
    };
    const tilt      = { x: 0, y: 0 };
    const tiltTgt   = { x: 0, y: 0 };
    const velocity  = { x: 0, y: 0 };
    const drag      = { active: false, sx: 0, sy: 0, ox: 0, oy: 0 };
    const lastMouse = { x: 0, y: 0, t: 0 };
    let rafId = 0;

    const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
    const applyCanvas = () => { canvas!.style.transform = `translate(${offset.x}px, ${offset.y}px)`; };
    const applyScene  = () => { scene!.style.transform  = `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`; };

    function tick() {
      tilt.x += (tiltTgt.x - tilt.x) * 0.06;
      tilt.y += (tiltTgt.y - tilt.y) * 0.06;
      applyScene();
      if (!drag.active && (Math.abs(velocity.x) > 0.05 || Math.abs(velocity.y) > 0.05)) {
        offset.x = clamp(offset.x + velocity.x, -(bounds.w - window.innerWidth + 200), 200);
        offset.y = clamp(offset.y + velocity.y, -(bounds.h - window.innerHeight + 200), 200);
        velocity.x *= 0.93;
        velocity.y *= 0.93;
        applyCanvas();
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    function onMouseMove(e: MouseEvent) {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      tiltTgt.x = ny * -3;
      tiltTgt.y = nx *  3;
      if (drag.active) {
        const now = Date.now(), dt = Math.max(1, now - lastMouse.t);
        velocity.x = ((e.clientX - lastMouse.x) / dt) * 16;
        velocity.y = ((e.clientY - lastMouse.y) / dt) * 16;
        lastMouse.x = e.clientX; lastMouse.y = e.clientY; lastMouse.t = now;
        offset.x = clamp(drag.ox + (e.clientX - drag.sx), -(bounds.w - window.innerWidth + 200), 200);
        offset.y = clamp(drag.oy + (e.clientY - drag.sy), -(bounds.h - window.innerHeight + 200), 200);
        applyCanvas();
      }
    }
    function onMouseDown(e: MouseEvent) {
      drag.active = true;
      drag.sx = e.clientX; drag.sy = e.clientY;
      drag.ox = offset.x;  drag.oy = offset.y;
      lastMouse.x = e.clientX; lastMouse.y = e.clientY; lastMouse.t = Date.now();
      velocity.x = 0; velocity.y = 0;
      document.body.style.cursor = "grabbing";
    }
    function onMouseUp() { drag.active = false; document.body.style.cursor = ""; }

    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0];
      drag.active = true;
      drag.sx = t.clientX; drag.sy = t.clientY;
      drag.ox = offset.x;  drag.oy = offset.y;
      lastMouse.x = t.clientX; lastMouse.y = t.clientY; lastMouse.t = Date.now();
      velocity.x = 0; velocity.y = 0;
    }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault();
      const t = e.touches[0];
      const now = Date.now(), dt = Math.max(1, now - lastMouse.t);
      velocity.x = ((t.clientX - lastMouse.x) / dt) * 16;
      velocity.y = ((t.clientY - lastMouse.y) / dt) * 16;
      lastMouse.x = t.clientX; lastMouse.y = t.clientY; lastMouse.t = now;
      offset.x = clamp(drag.ox + (t.clientX - drag.sx), -(bounds.w - window.innerWidth + 200), 200);
      offset.y = clamp(drag.oy + (t.clientY - drag.sy), -(bounds.h - window.innerHeight + 200), 200);
      applyCanvas();
    }
    function onTouchEnd() { drag.active = false; }

    applyCanvas();
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mousedown",  onMouseDown);
    window.addEventListener("mouseup",    onMouseUp);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove",  onTouchMove,  { passive: false });
    window.addEventListener("touchend",   onTouchEnd);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mousedown",  onMouseDown);
      window.removeEventListener("mouseup",    onMouseUp);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove",  onTouchMove);
      window.removeEventListener("touchend",   onTouchEnd);
    };
  }, [bounds]);

  return (
    <div
      className="fixed inset-0 overflow-hidden cursor-grab"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "50% 50%",
        backgroundColor: "#f5f2ec",
        backgroundImage: [
          "linear-gradient(rgba(60,80,140,0.07) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(60,80,140,0.07) 1px, transparent 1px)",
          "linear-gradient(rgba(60,80,140,0.03) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(60,80,140,0.03) 1px, transparent 1px)",
        ].join(","),
        backgroundSize: "120px 120px, 120px 120px, 24px 24px, 24px 24px",
      }}
    >
      <div ref={sceneRef} className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        <div
          ref={canvasRef}
          className="absolute"
          style={{
            width: bounds.w,
            height: bounds.h,
            transformStyle: "preserve-3d",
            userSelect: "none",
            willChange: "transform",
          }}
        >
          {items.map((item) => (
            <div
              key={item.src}
              className="absolute transition-[scale] duration-300 ease-out hover:scale-[1.025]"
              style={{
                left: item.x,
                top: item.y,
                transform: `rotate(${item.rot}deg) translateZ(${item.z}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div style={{
                display: "inline-block",
                padding: "5px",
                background: "#faf8f5",
                boxShadow: "0 3px 20px rgba(0,0,0,0.13), 0 1px 5px rgba(0,0,0,0.07)",
              }}>
                <Image
                  src={item.src}
                  alt=""
                  width={item.w}
                  height={item.h}
                  style={{ width: item.w, height: item.h, objectFit: "cover", display: "block" }}
                  draggable={false}
                  priority={item.priority}
                  sizes={`${Math.max(item.w, item.h)}px`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* vignette */}
      <div className="fixed inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 50%, rgba(36,26,12,0.22) 100%)" }} />

      {/* grain */}
      <svg className="fixed inset-0 w-full h-full z-10 pointer-events-none opacity-[0.13]"
        xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <Link href="/"
        className="fixed top-6 z-50 text-[11px] tracking-[0.22em] uppercase transition-colors"
        style={{ left: 88, color: "rgba(38,28,18,0.35)", mixBlendMode: "multiply" }}
      >
        Studio Pensieve
      </Link>
    </div>
  );
}
