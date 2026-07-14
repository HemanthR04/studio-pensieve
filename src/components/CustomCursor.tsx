"use client";

import { useEffect, useRef } from "react";
import useIsTouchDevice from "@/hooks/useIsTouchDevice";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const show = !useIsTouchDevice();

  useEffect(() => {
    if (!show) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
    };

    const onOver = (e: MouseEvent) => {
      const pinning = !!(e.target as HTMLElement).closest('[data-cursor="pin"]');
      const hovering = !!(e.target as HTMLElement).closest(
        "a, button, [role='button'], label, select"
      );
      if (pinning) {
        el.style.width  = "18px";
        el.style.height = "6px";
        el.style.background = "rgba(214, 199, 168, 0.85)";
        el.style.border = "none";
        el.style.borderRadius = "2px";
        el.style.marginLeft = "-9px";
        el.style.marginTop  = "-3px";
        el.style.rotate = "-8deg";
      } else if (hovering) {
        el.style.width  = "20px";
        el.style.height = "20px";
        el.style.background = "transparent";
        el.style.border = "1.5px solid rgba(26,26,26,0.7)";
        el.style.borderRadius = "9999px";
        el.style.marginLeft = "-10px";
        el.style.marginTop  = "-10px";
        el.style.rotate = "0deg";
      } else {
        el.style.width  = "8px";
        el.style.height = "8px";
        el.style.background = "#1a1a1a";
        el.style.border = "none";
        el.style.borderRadius = "9999px";
        el.style.marginLeft = "-4px";
        el.style.marginTop  = "-4px";
        el.style.rotate = "0deg";
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[999] pointer-events-none rounded-full"
      style={{
        width: "8px",
        height: "8px",
        background: "#1a1a1a",
        opacity: 0,
        marginLeft: "-4px",
        marginTop: "-4px",
        transition: "width 150ms ease, height 150ms ease, background 150ms ease, border 150ms ease, margin 150ms ease",
        willChange: "transform",
      }}
    />
  );
}
