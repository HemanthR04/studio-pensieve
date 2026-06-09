"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import blurUrls from "@/data/blurDataUrls.json";

const IMAGES = [
  {
    src:  "/LANDING PHOTOS/1.jpg",
    blur: blurUrls["public/LANDING PHOTOS/1.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/2.jpg",
    blur: blurUrls["public/LANDING PHOTOS/2.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/3.jpg",
    blur: blurUrls["public/LANDING PHOTOS/3.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/4.jpg",
    blur: blurUrls["public/LANDING PHOTOS/4.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/5.jpg",
    blur: blurUrls["public/LANDING PHOTOS/5.jpg"],
  },
];

const INTERVAL = 8000; // ms per slide

export default function Hero() {
  const navRef      = useRef<HTMLElement>(null);
  const heroRef     = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Auto-cycle images
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % IMAGES.length;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  // Scroll: hide nav
  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 55;
      if (past !== scrolled) setScrolled(past);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    gsap.to(navRef.current, {
      opacity: scrolled ? 0 : 1,
      y:       scrolled ? -8 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
    if (navRef.current) {
      navRef.current.style.pointerEvents = scrolled ? "none" : "auto";
    }
  }, [scrolled]);

  // Entry animation — nav is intentionally excluded; loading screen already covers it
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-statement",  { opacity: 0, y: 24, duration: 0.9 })
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.6 }, "-=0.2");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[90] flex items-center justify-between px-8 md:px-14 h-14"
      >
        <span className="font-display text-sm font-light tracking-[0.18em] uppercase text-white">
          Studio Pensieve
        </span>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
            { label: "Journal",  href: "/journal"  },
            { label: "About",    href: "/about"    },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80" />
          Contact
        </Link>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Image stack — crossfade */}
        {IMAGES.map(({ src, blur }, i) => {
          const isActive = i === current;
          const isPrev   = i === prev;
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
              style={{ opacity: isActive ? 1 : isPrev ? 0 : 0, zIndex: isActive ? 2 : isPrev ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`Studio Pensieve project ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blur}
              />
            </div>
          );
        })}

        {/* Bottom gradient — text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Top gradient — nav legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between px-8 md:px-14 pt-14 pb-12 md:pb-16">
          {/* Spacer so text sits at the bottom */}
          <div />

          <div className="flex flex-col gap-8">
            <p className="hero-statement text-[11px] tracking-[0.25em] uppercase text-white/50 mb-4">
              Interior Design · Bengaluru · Est. 2020
            </p>
            <h1 className="hero-statement font-display text-3xl md:text-4xl lg:text-[2.8rem] font-medium leading-[1.25] text-white max-w-2xl">
              We craft considered interiors.
            </h1>

            {/* Slide progress indicators */}
            <div className="flex items-center gap-2">
              {IMAGES.map((_img, i) => (
                <button
                  key={i}
                  onClick={() => { setPrev(current); setCurrent(i); }}
                  className="relative h-px overflow-hidden bg-white/25"
                  style={{ width: "2rem" }}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {/* Completed */}
                  {i < current && (
                    <span className="absolute inset-0 bg-white/80" />
                  )}
                  {/* Active — animates across INTERVAL ms */}
                  {i === current && (
                    <span
                      key={current}
                      className="absolute inset-y-0 left-0 bg-white/80"
                      style={{ animation: `progress ${INTERVAL}ms linear forwards` }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
