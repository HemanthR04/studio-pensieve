"use client";

import { useEffect, useState } from "react";

export default function LoadAnimation() {
  const [phase, setPhase] = useState<"enter" | "hold" | "fade" | "done">("enter");

  useEffect(() => {
    if (sessionStorage.getItem("sp_visited")) {
      setPhase("done");
      return;
    }
    const t1 = setTimeout(() => setPhase("hold"), 550);
    const t2 = setTimeout(() => setPhase("fade"), 2000);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("sp_visited", "1");
    }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  const visible = phase === "hold";

  return (
    <div
      className="fixed inset-0 z-[300] bg-[#faf9f7] flex items-center justify-center pointer-events-none"
      style={{
        opacity: phase === "fade" ? 0 : 1,
        transition: phase === "fade" ? "opacity 800ms cubic-bezier(0.4,0,0.2,1)" : "none",
      }}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Wordmark */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}
        >
          <p
            style={{
              fontFamily: "General Sans, sans-serif",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "0.55em",
              textTransform: "uppercase",
              color: "#1a1a1a",
              marginBottom: "6px",
            }}
          >
            Studio
          </p>
          <p
            style={{
              fontFamily: "General Sans, sans-serif",
              fontWeight: 500,
              fontSize: "22px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#1a1a1a",
            }}
          >
            Pensieve
          </p>
        </div>

        {/* Thin animated rule */}
        <div
          style={{
            height: "1px",
            background: "#1a1a1a",
            width: visible ? "48px" : "0px",
            opacity: visible ? 0.25 : 0,
            transition: "width 700ms cubic-bezier(0.4,0,0.2,1) 200ms, opacity 700ms ease 200ms",
          }}
        />
      </div>
    </div>
  );
}
