"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";

type MenuContextType = { openMenu: () => void };
const MenuContext = createContext<MenuContextType>({ openMenu: () => {} });
export const useMenu = () => useContext(MenuContext);

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Projects", href: "/#portfolio" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact",  href: "/contact" },
];

// 4 portrait images from the Whitmore project for the image strip
const STRIP_IMAGES = [
  "/Projects/Vana/%201%20Foyer.jpg",
  "/Projects/Vana/6%20Living%20room.jpg",
  "/Projects/Vana/17%20Master%20bedroom.jpg",
  "/Projects/Vana/12%20Kitchen.jpg",
];

export default function MenuProvider({ children }: { children: React.ReactNode }) {
  const pathname    = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const linksRef     = useRef<HTMLDivElement>(null);
  const isAnimating  = useRef(false);
  const preFocusRef  = useRef<Element | null>(null);

  // Register initial position with GSAP so it can animate from it
  useEffect(() => {
    gsap.set(overlayRef.current, { yPercent: 100 });
  }, []);

  // Show MENU button only after navbar has scrolled away
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    if (open) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openMenu = useCallback(() => {
    if (isAnimating.current || open) return;
    preFocusRef.current = document.activeElement;
    isAnimating.current = true;
    setOpen(true);

    gsap.to(overlayRef.current, {
      yPercent: 0,
      duration: 0.75,
      ease: "power4.inOut",
      onComplete: () => {
        isAnimating.current = false;
        overlayRef.current?.querySelector<HTMLElement>("button[aria-label='Close menu']")?.focus();
      },
    });

    const items = linksRef.current?.querySelectorAll(".menu-link");
    if (items) {
      gsap.fromTo(items,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, delay: 0.38, ease: "power3.out" }
      );
    }
  }, [open]);

  const closeMenu = useCallback(() => {
    if (isAnimating.current || !open) return;
    isAnimating.current = true;

    gsap.to(overlayRef.current, {
      yPercent: 100,
      duration: 0.65,
      ease: "power4.inOut",
      onComplete: () => {
        setOpen(false);
        isAnimating.current = false;
        (preFocusRef.current as HTMLElement | null)?.focus();
      },
    });
  }, [open]);

  // Escape to close + focus trap — placed after closeMenu is declared
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { closeMenu(); return; }
      if (e.key !== "Tab") return;

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <MenuContext.Provider value={{ openMenu }}>
      {children}

      {/* Fixed MENU trigger */}
      <button
        onClick={openMenu}
        aria-label="Open menu"
        className={`hidden md:block fixed top-1/2 -translate-y-1/2 right-7 z-[120] text-[11px] font-black tracking-[0.22em] uppercase text-white mix-blend-difference transition-opacity duration-300 ${open || !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        Menu
      </button>

      {/* ── Fullscreen overlay ───────────────────────────────────── */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!open}
        className="fixed inset-0 z-[150] bg-[#111] flex"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >

        {/* Left: studio name */}
        <div className="hidden md:flex w-[28%] flex-col justify-center px-12 lg:px-16 shrink-0">
          <p className="font-display text-2xl lg:text-3xl font-medium text-white tracking-widest uppercase leading-snug">
            Studio<br />Pensieve
          </p>
        </div>

        {/* Image strip — full viewport height, 4 stacked images */}
        <div className="hidden md:flex w-[10vw] max-w-[140px] flex-col shrink-0">
          {STRIP_IMAGES.map((src, i) => (
            <div key={i} className="relative flex-1 overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                sizes="140px"
                className="object-cover grayscale opacity-70"
              />
            </div>
          ))}
        </div>

        {/* Right: close + nav links + bottom bar */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Close */}
          <div className="flex items-center justify-between px-8 md:px-14 pt-7 pb-0 shrink-0">
            {/* Mobile-only studio name */}
            <p className="md:hidden font-display text-lg font-medium text-white tracking-widest uppercase">
              Studio Pensieve
            </p>
            <div className="hidden md:block" />
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-[11px] font-black tracking-[0.22em] uppercase text-white hover:opacity-40 transition-opacity"
            >
              Close
            </button>
          </div>

          {/* Nav links */}
          <div ref={linksRef} className="flex-1 flex flex-col justify-center px-8 md:px-14 gap-0">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="menu-link font-sans text-[clamp(1.1rem,4vw,1.8rem)] md:text-[2vw] lg:text-[1.6vw] font-medium text-white leading-[1.2] hover:opacity-25 transition-opacity"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex items-end justify-between px-8 md:px-14 pb-10 md:pb-12 shrink-0">
            <div className="flex flex-col gap-1">
              <a
                href="https://instagram.com/studiopensieve"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-black tracking-[0.22em] uppercase text-white hover:opacity-40 transition-opacity"
              >
                Instagram
              </a>
              <span className="text-[11px] font-black tracking-[0.22em] uppercase text-white/30 cursor-default">
                LinkedIn
              </span>
            </div>
            <p className="text-[11px] text-white/35 tracking-wide" suppressHydrationWarning>
              All rights reserved © {new Date().getFullYear()} Studio Pensieve
            </p>
          </div>

        </div>
      </div>
    </MenuContext.Provider>
  );
}
