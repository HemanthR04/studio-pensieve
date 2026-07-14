"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

import blurUrls from "@/data/blurDataUrls.json";
import { useMenu } from "@/components/Menu";
import useIsMobile from "@/hooks/useIsMobile";

const DESKTOP_IMAGES = [
  {
    src:  "/LANDING PHOTOS/1.jpg",
    blur: undefined,
  },
  {
    src:  "/LANDING PHOTOS/4.jpg",
    blur: blurUrls["public/LANDING PHOTOS/4.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/3.jpg",
    blur: blurUrls["public/LANDING PHOTOS/3.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/2.jpg",
    blur: blurUrls["public/LANDING PHOTOS/2.jpg"],
  },
  {
    src:  "/LANDING PHOTOS/5.jpg",
    blur: blurUrls["public/LANDING PHOTOS/5.jpg"],
  },
];

// Portrait (9:16-ish) crops shot specifically for phone-width viewports
const MOBILE_IMAGES = [
  {
    src:  "/Mobile Hero Images/1.jpg",
    blur: blurUrls["public/Mobile Hero Images/1.jpg"],
  },
  {
    src:  "/Mobile Hero Images/2.jpg",
    blur: blurUrls["public/Mobile Hero Images/2.jpg"],
  },
  {
    src:  "/Mobile Hero Images/3.jpg",
    blur: blurUrls["public/Mobile Hero Images/3.jpg"],
  },
  {
    src:  "/Mobile Hero Images/4.jpg",
    blur: blurUrls["public/Mobile Hero Images/4.jpg"],
  },
  {
    src:  "/Mobile Hero Images/5.jpg",
    blur: blurUrls["public/Mobile Hero Images/5.jpg"],
  },
];

const INTERVAL = 5000; // ms per slide

export default function Hero() {
  const { openMenu } = useMenu();
  const isMobile     = useIsMobile();
  const IMAGES       = isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES;
  const navRef      = useRef<HTMLElement>(null);
  const heroRef     = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Reset slide position when switching between mobile/desktop image sets
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: keep `current` in range when IMAGES swaps length
    setCurrent(0);
    setPrev(null);
  }, [isMobile]);

  // Auto-cycle images
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => {
        setPrev(c);
        return (c + 1) % IMAGES.length;
      });
    }, INTERVAL);
    return () => clearInterval(id);
  }, [IMAGES.length]);

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

        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hidden md:flex text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors items-center gap-2"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80" />
            Contact
          </Link>
          <button
            onClick={openMenu}
            className="md:hidden text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-dvh overflow-hidden"
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
                {...(blur ? { placeholder: "blur", blurDataURL: blur } : {})}
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
