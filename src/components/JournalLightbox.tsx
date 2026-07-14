"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import blurUrls from "@/data/blurDataUrls.json";
import type { JournalItem } from "@/components/JournalWall";

export default function JournalLightbox({
  items, index, onClose, onNavigate,
}: {
  items: JournalItem[];
  index: number;
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const item = items[index];

  const close = useCallback(() => {
    const overlay = overlayRef.current, frame = frameRef.current;
    if (!overlay || !frame) { onClose(); return; }
    gsap.to(frame, { opacity: 0, scale: 0.96, duration: 0.2, ease: "power2.in" });
    gsap.to(overlay, { opacity: 0, duration: 0.25, ease: "power2.in", onComplete: onClose });
  }, [onClose]);

  // Open animation — runs once on mount only.
  useEffect(() => {
    const overlay = overlayRef.current, frame = frameRef.current;
    if (!overlay || !frame) return;
    gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
    gsap.fromTo(frame, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
  }, []);

  // Quick crossfade when navigating prev/next (skipped on the initial mount).
  useEffect(() => {
    if (!mountedRef.current) { mountedRef.current = true; return; }
    const frame = frameRef.current;
    if (!frame) return;
    gsap.fromTo(frame, { opacity: 0.3 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
  }, [index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") onNavigate(-1);
      else if (e.key === "ArrowRight") onNavigate(1);
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close, onNavigate]);

  if (!item) return null;
  const blur = blurUrls[`public${item.file}` as keyof typeof blurUrls];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center px-6 md:px-16 py-10 md:py-16"
      style={{ background: "rgba(20, 17, 12, 0.92)" }}
      onClick={close}
    >
      <button
        onClick={close}
        className="absolute top-6 right-6 md:top-8 md:right-10 text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
      >
        Close ✕
      </button>

      <p className="absolute top-6 left-6 md:top-8 md:left-10 text-[11px] tracking-[0.2em] uppercase text-white/40">
        {index + 1} / {items.length}
      </p>

      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors px-3 py-6"
        >
          ← Prev
        </button>
      )}
      {index < items.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors px-3 py-6"
        >
          Next →
        </button>
      )}

      <div
        ref={frameRef}
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        <Image
          src={item.file}
          alt=""
          width={item.width}
          height={item.height}
          className="block w-auto h-auto max-w-[85vw] max-h-[80vh] rounded-[2px]"
          placeholder={blur ? "blur" : "empty"}
          blurDataURL={blur}
          sizes="85vw"
          priority
        />
      </div>
    </div>
  );
}
