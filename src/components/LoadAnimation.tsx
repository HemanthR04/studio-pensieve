"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Phase = "enter" | "hold" | "fade" | "done";

function getInitialPhase(): Phase {
  if (typeof window !== "undefined" && sessionStorage.getItem("sp_visited")) return "done";
  return "enter";
}

export default function LoadAnimation() {
  const [phase, setPhase] = useState<Phase>(getInitialPhase);

  useEffect(() => {
    if (phase !== "enter") return;
    const t1 = setTimeout(() => setPhase("hold"), 550);
    const t2 = setTimeout(() => setPhase("fade"), 2000);
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("sp_visited", "1");
    }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [phase]);

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
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 600ms ease, transform 600ms ease",
        }}
      >
        <Image
          src="/logo.png"
          alt="Studio Pensieve"
          width={600}
          height={600}
          className="w-[60vw] max-w-[480px] min-w-[220px] h-auto"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
