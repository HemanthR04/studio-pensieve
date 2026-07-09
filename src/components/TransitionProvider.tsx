"use client";

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

type NavigateOptions = {
  rect?: DOMRect;
  color?: string;
  imageSrc?: string;
  imagePosition?: string;
};

type TransitionContextType = {
  navigate: (href: string, options?: NavigateOptions) => void;
  isArriving: () => boolean;
};

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
  isArriving: () => false,
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayImgRef = useRef<HTMLImageElement>(null);
  const isNavigating = useRef(false);
  const arriving = useRef(false);

  // Hide overlay on first mount
  useEffect(() => {
    gsap.set(overlayRef.current, { opacity: 0 });
  }, []);

  // When pathname changes the new page is rendered — fade overlay out
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || !isNavigating.current) return;

    // Force scroll to top instantly before overlay fades so no slide glitch
    window.scrollTo(0, 0);

    gsap.to(overlay, {
      opacity: 0,
      duration: 0.6,
      delay: 0.05, // small wait ensures hero is painted beneath
      ease: "power2.out",
      onComplete: () => {
        isNavigating.current = false;
        arriving.current = false;
        const img = overlayImgRef.current;
        if (img) { img.style.display = "none"; img.src = ""; img.style.objectPosition = ""; }
      },
    });
  }, [pathname]);

  const isArriving = useCallback(() => arriving.current, []);

  const navigate = useCallback(
    (href: string, options?: NavigateOptions) => {
      if (isNavigating.current) return;
      isNavigating.current = true;
      arriving.current = true;

      const overlay = overlayRef.current;
      if (!overlay) { router.push(href); return; }

      const { rect, color = "#faf9f7", imageSrc, imagePosition } = options ?? {};

      if (rect) {
        // Load the card image (already in browser cache) into the overlay
        const img = overlayImgRef.current;
        if (img && imageSrc) {
          img.src = imageSrc;
          img.style.display = "block";
          // Match the hero's object-position so the crop is identical when
          // the overlay fades out and the hero beneath is revealed — no jump.
          img.style.objectPosition = imagePosition ?? "center center";
        }

        // Position overlay exactly over the card image
        gsap.set(overlay, {
          position: "fixed",
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          background: imageSrc ? "none" : color,
          opacity: 1,
          borderRadius: 0,
        });

        // Expand to fullscreen, then navigate
        gsap.to(overlay, {
          top: 0,
          left: 0,
          width: "100vw",
          height: "100dvh",
          duration: 0.85,
          ease: "power4.inOut",
          onComplete: () => router.push(href),
        });
      } else {
        // Fallback: simple fade
        const img = overlayImgRef.current;
        if (img) img.style.display = "none";
        gsap.set(overlay, {
          top: 0, left: 0,
          width: "100vw", height: "100dvh",
          background: "#faf9f7",
        });
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => router.push(href),
        });
      }
    },
    [router]
  );

  return (
    <TransitionContext.Provider value={{ navigate, isArriving }}>
      {children}
      <div
        ref={overlayRef}
        className="fixed z-[200] pointer-events-none overflow-hidden"
        style={{ opacity: 0, top: 0, left: 0, width: "100vw", height: "100dvh" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={overlayImgRef}
          alt=""
          style={{ display: "none", width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </TransitionContext.Provider>
  );
}
