"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── image paths ─────────────────────────────────────────────── */

function emb(f: string): string {
  return `/Projects/Emb%20Pristine%20/${encodeURIComponent(f)}`;
}
function kishore(f: string): string {
  return `/Projects/Kishore%20Residence/${encodeURIComponent(f)}`;
}
function chanpatna(f: string): string {
  return `/Projects/Chanpatna/${encodeURIComponent(f)}`;
}
function rajankunte(f: string): string {
  return `/Projects/Rajankunte/${encodeURIComponent(f)}`;
}
function rmk(f: string): string {
  return `/Projects/RmK/${encodeURIComponent(f)}`;
}
function uber(f: string): string {
  return `/Projects/Uber%20Residence/${encodeURIComponent(f)}`;
}
function vibranium(f: string): string {
  return `/Projects/Vibranium/${encodeURIComponent(f)}`;
}

const SK = {
  croquis:      "/sketches/croquis.jpg",
  avery:        "/sketches/avery.jpg",
  ruskin:       "/sketches/ruskin.jpg",
  melnikov:     "/sketches/melnikov.jpg",
  archBiel:     "/sketches/arch-biel.jpg",
  pencilHouse:  "/sketches/pencil-house.jpg",
  woodenStruct: "/sketches/wooden-struct.jpg",
  modernHouse:  "/sketches/modern-house.jpg",
  toulouse:     "/sketches/toulouse.jpg",
  braga:        "/sketches/braga.jpg",
  initial:      "/sketches/initial.jpg",
  cupola:       "/sketches/cupola.jpg",
  archDrawing:  "/sketches/arch-drawing.png",
  atelier:      "/sketches/atelier.jpg",
  castelo:      "/sketches/castelo.jpg",
  // aliases used in extended clusters
  pencil:       "/sketches/pencil-house.jpg",
  wooden:       "/sketches/wooden-struct.jpg",
  init:         "/sketches/initial.jpg",
};

/* ─── types ───────────────────────────────────────────────────── */

type ImgItem = {
  kind: "photo" | "sketch";
  src: string;
  w: number;
  h: number;
  x: number;
  y: number;
  z: number;       // translateZ for 3-D depth — also drives stacking order within cluster
  rot: number;
};

type TextItem = {
  kind: "text";
  lines: string[];
  size: number;
  x: number;
  y: number;
  z: number;
  rot: number;
};

type CanvasItem = ImgItem | TextItem;

/* ─── canvas ──────────────────────────────────────────────────── */

const CANVAS_W = 9800;
const CANVAS_H = 1600;

/* ─── items ───────────────────────────────────────────────────── */

/* Rule: within each cluster items overlap by ~30-50 px.
   z controls stacking: higher z = on top.
   rot: anchor photos near 0°, secondary pieces ±3-8°, accents up to ±11°.  */

const ITEMS: CanvasItem[] = [

  // ── I · Arrival ───────────────────────────────────────────────
  //   hero foyer anchored straight; sketch slides behind-right; small foyer peeks below
  { kind:"photo",  src:emb(" 1 Foyer.jpg"),           w:292, h:220, x:52,  y:118, z:30,  rot:0    },
  { kind:"sketch", src:SK.croquis,                    w:228, h:168, x:288, y:72,  z:50,  rot:-6   },
  { kind:"photo",  src:emb(" 2 Foyer.jpg"),           w:130, h:173, x:72,  y:325, z:70,  rot:4    },
  { kind:"text",   lines:["EMB Pristine", "2024"],    size:21, x:52,  y:538, z:20, rot:-2 },

  // ── II · Living ───────────────────────────────────────────────
  //   sketch top; large living overlaps sketch bottom-half; tiny crockery tucks into corner
  { kind:"sketch", src:SK.avery,                      w:242, h:182, x:570, y:52,  z:25,  rot:4    },
  { kind:"photo",  src:emb("6 Living room.jpg"),      w:288, h:216, x:575, y:262, z:50,  rot:-1.5 },
  { kind:"photo",  src:emb("5 Crockery Bar.jpg"),     w:116, h:154, x:832, y:145, z:70,  rot:9    },
  { kind:"text",   lines:["living"],                  size:15, x:576, y:526, z:20, rot:1  },

  // ── III · Open Plan ───────────────────────────────────────────
  //   large hero straight; toulouse sketch overlaps top-right; dining peeks bottom-left
  { kind:"photo",  src:emb("11 Living + Dining.jpg"), w:322, h:242, x:1082, y:88,  z:30, rot:-1   },
  { kind:"sketch", src:SK.toulouse,                   w:218, h:164, x:1365, y:48,  z:50, rot:6    },
  { kind:"photo",  src:emb(" 3 Dining area.jpg"),     w:148, h:198, x:1098, y:386, z:70, rot:-7   },
  { kind:"text",   lines:["open plan"],               size:14, x:1368, y:298, z:20, rot:2 },

  // ── IV · Material ─────────────────────────────────────────────
  //   arch drawing floats top; kitchen overlaps it below; ruskin slides in from left
  { kind:"sketch", src:SK.archDrawing,                w:278, h:180, x:1668, y:68,  z:25, rot:-2   },
  { kind:"photo",  src:emb("12 Kitchen.jpg"),         w:255, h:192, x:1872, y:182, z:55, rot:-3   },
  { kind:"sketch", src:SK.ruskin,                     w:172, h:228, x:1675, y:318, z:70, rot:5    },
  { kind:"text",   lines:["material"],                size:14, x:1888, y:420, z:20, rot:-1 },

  // ── V · Light ─────────────────────────────────────────────────
  //   bedroom hero; archBiel sketch overlaps top-right; balcony+dining tucks below
  { kind:"photo",  src:emb("17 Master bedroom.jpg"),  w:298, h:224, x:2228, y:98,  z:30, rot:-1.5 },
  { kind:"sketch", src:SK.archBiel,                   w:252, h:188, x:2498, y:52,  z:50, rot:6    },
  { kind:"photo",  src:emb("9 Balcony + Dining.jpg"), w:195, h:147, x:2242, y:368, z:70, rot:-5   },
  { kind:"text",   lines:["light", "+ volume"],       size:18, x:2495, y:322, z:20, rot:2 },

  // ── VI · Study ────────────────────────────────────────────────
  //   braga sketch top; son's room overlaps; castelo slides behind right
  { kind:"sketch", src:SK.braga,                      w:232, h:175, x:2825, y:65,  z:25, rot:3    },
  { kind:"photo",  src:emb("14 Son_s room.jpg"),      w:245, h:185, x:2838, y:272, z:50, rot:-2   },
  { kind:"sketch", src:SK.castelo,                    w:225, h:170, x:3102, y:142, z:45, rot:8    },
  { kind:"photo",  src:emb(" 4 Dining area.jpg"),     w:152, h:203, x:3118, y:362, z:65, rot:-6   },
  { kind:"text",   lines:["study"],                   size:14, x:2838, y:505, z:20, rot:-2 },

  // ── VII · Bedroom ─────────────────────────────────────────────
  //   son's room large hero; cupola behind-right; guest room below
  { kind:"photo",  src:emb("10 Guest room_study.jpg"),w:308, h:232, x:3418, y:92,  z:30, rot:-1   },
  { kind:"sketch", src:SK.cupola,                     w:155, h:194, x:3705, y:68,  z:50, rot:5    },
  { kind:"photo",  src:emb("18 Master bedroom.jpg"),  w:192, h:145, x:3432, y:378, z:70, rot:-7   },
  { kind:"text",   lines:["detail →"],               size:14, x:3708, y:312, z:20, rot:3 },

  // ── VIII · Threshold ──────────────────────────────────────────
  //   modern house sketch; bathroom overlaps; master bedroom 2 slides right
  { kind:"sketch", src:SK.modernHouse,                w:242, h:182, x:4025, y:75,  z:25, rot:7    },
  { kind:"photo",  src:emb("20 Study bathroom.jpg"),  w:148, h:198, x:4038, y:305, z:55, rot:-5   },
  { kind:"photo",  src:emb("19 Son_s bathroom.jpg"),  w:185, h:248, x:4298, y:132, z:60, rot:-8   },
  { kind:"text",   lines:["threshold"],               size:15, x:4042, y:552, z:20, rot:-2 },

  // ── IX · New Horizons / Kishore ───────────────────────────────
  //   atelier sketch; kishore 1 hero; kishore 2 small right; melnikov peeks bottom
  { kind:"sketch", src:SK.atelier,                    w:202, h:150, x:4598, y:58,  z:25, rot:-3   },
  { kind:"photo",  src:kishore("1.jpg"),              w:308, h:232, x:4608, y:262, z:50, rot:-1.5 },
  { kind:"photo",  src:kishore("2.jpg"),              w:138, h:184, x:4928, y:118, z:65, rot:8    },
  { kind:"sketch", src:SK.melnikov,                   w:195, h:146, x:4942, y:345, z:40, rot:-6   },
  { kind:"text",   lines:["onwards →"],               size:19, x:4614, y:545, z:20, rot:1  },

  // ── X · Grain (Chanpatna) ─────────────────────────────────────
  //   pencil-house anchors top; chanpatna photo overlaps; wooden struct tucks below
  { kind:"sketch", src:SK.pencil,                     w:235, h:177, x:5380, y:62,  z:25, rot:-3   },
  { kind:"photo",  src:chanpatna("1.jpg"),             w:290, h:218, x:5598, y:90,  z:45, rot:2    },
  { kind:"sketch", src:SK.wooden,                     w:208, h:156, x:5388, y:298, z:60, rot:6    },
  { kind:"photo",  src:chanpatna("3.jpg"),             w:148, h:198, x:5858, y:165, z:65, rot:-8   },
  { kind:"text",   lines:["grain", "+ warmth"],        size:20, x:5605, y:355, z:20, rot:-2 },

  // ── XI · The Sketch Comes First ───────────────────────────────
  //   initial sketch top; rajankunte hero; chanpatna 5 accent right
  { kind:"sketch", src:SK.init,                       w:248, h:188, x:5945, y:52,  z:25, rot:4    },
  { kind:"photo",  src:rajankunte("1.jpg"),            w:272, h:205, x:5958, y:295, z:50, rot:-1.5 },
  { kind:"photo",  src:chanpatna("5.jpg"),             w:150, h:200, x:6215, y:118, z:68, rot:9    },
  { kind:"text",   lines:["the sketch", "comes first"], size:16, x:6220, y:372, z:20, rot:-3 },

  // ── XII · Material Honesty (RmK) ─────────────────────────────
  //   rmk hero straight; wooden struct floats top-right; rajankunte 3 peeks below
  { kind:"photo",  src:rmk("1.jpg"),                  w:298, h:224, x:6462, y:80,  z:30, rot:-2   },
  { kind:"sketch", src:SK.wooden,                     w:192, h:144, x:6730, y:52,  z:50, rot:6    },
  { kind:"photo",  src:rajankunte("3.jpg"),            w:155, h:207, x:6472, y:358, z:68, rot:-7   },
  { kind:"text",   lines:["material", "honesty"],      size:17, x:6732, y:252, z:20, rot:2  },
  { kind:"photo",  src:rmk("4.jpg"),                  w:218, h:164, x:6882, y:155, z:45, rot:8    },

  // ── XIII · What the client said (Uber) ───────────────────────
  //   long text as hero; uber photo flanks; pencil sketch balances
  { kind:"text",   lines:["make it feel", "like it was", "always there"], size:15, x:7235, y:248, z:20, rot:1 },
  { kind:"photo",  src:chanpatna("2.jpg"),             w:238, h:180, x:6995, y:72,  z:30, rot:3    },
  { kind:"sketch", src:SK.pencil,                     w:178, h:134, x:7242, y:58,  z:52, rot:-5   },
  { kind:"photo",  src:uber("1.jpg"),                  w:148, h:198, x:7005, y:308, z:62, rot:-4   },
  { kind:"text",   lines:["—client note,", "Chanpatna"],  size:11, x:7250, y:408, z:20, rot:0 },

  // ── XIV · Light Study (Vibranium) ────────────────────────────
  //   vibranium hero; init sketch top-right; uber 3 below; poetic text
  { kind:"photo",  src:vibranium("1.jpg"),             w:305, h:230, x:7515, y:88,  z:30, rot:-1   },
  { kind:"sketch", src:SK.init,                       w:195, h:148, x:7792, y:62,  z:52, rot:7    },
  { kind:"photo",  src:uber("3.jpg"),                  w:165, h:220, x:7528, y:372, z:68, rot:-6   },
  { kind:"text",   lines:["every room", "has a mood", "before it", "has a plan"],  size:14, x:7795, y:268, z:20, rot:-2 },

  // ── XV · Drawn by Hand (RmK + Vibranium) ────────────────────
  //   rmk 6 straight; wooden struct accent; vibranium 3 tucks right; text
  { kind:"photo",  src:rmk("6.jpg"),                  w:252, h:190, x:8082, y:78,  z:30, rot:2    },
  { kind:"sketch", src:SK.wooden,                     w:218, h:164, x:8088, y:325, z:58, rot:-4   },
  { kind:"photo",  src:vibranium("3.jpg"),             w:162, h:216, x:8342, y:108, z:62, rot:8    },
  { kind:"text",   lines:["drawn by hand", "built by hand"],  size:16, x:8348, y:382, z:20, rot:-3 },

  // ── XVI · Threshold (Uber + Rajankunte) ──────────────────────
  //   uber 5 hero; rajankunte 5 overlaps; arch-biel revisited behind
  { kind:"photo",  src:uber("5.jpg"),                  w:295, h:222, x:8655, y:85,  z:30, rot:-1.5 },
  { kind:"sketch", src:SK.archBiel,                   w:225, h:170, x:8660, y:358, z:55, rot:5    },
  { kind:"photo",  src:rajankunte("5.jpg"),            w:148, h:198, x:8928, y:145, z:65, rot:-7   },
  { kind:"text",   lines:["the threshold", "between rooms", "is a pause"],  size:14, x:8932, y:392, z:20, rot:2 },
  { kind:"text",   lines:["∎"],                        size:28, x:9200, y:490, z:20, rot:0 },
];

/* ─── component ───────────────────────────────────────────────── */

export default function JournalCanvas() {
  const sceneRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene  = sceneRef.current;
    if (!canvas || !scene) return;

    // Content lives roughly x: 52–5200, y: 48–600 — centre on that, not the full canvas
    const CONTENT_CX = 2626;
    const CONTENT_CY = 324;
    const offset = {
      x: Math.round(window.innerWidth  / 2 - CONTENT_CX),
      y: Math.round(window.innerHeight / 2 - CONTENT_CY),
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
        offset.x = clamp(offset.x + velocity.x, -(CANVAS_W - window.innerWidth + 200), 200);
        offset.y = clamp(offset.y + velocity.y, -(CANVAS_H - window.innerHeight + 200), 200);
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
        offset.x = clamp(drag.ox + (e.clientX - drag.sx), -(CANVAS_W - window.innerWidth + 200), 200);
        offset.y = clamp(drag.oy + (e.clientY - drag.sy), -(CANVAS_H - window.innerHeight + 200), 200);
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
      offset.x = clamp(drag.ox + (t.clientX - drag.sx), -(CANVAS_W - window.innerWidth + 200), 200);
      offset.y = clamp(drag.oy + (t.clientY - drag.sy), -(CANVAS_H - window.innerHeight + 200), 200);
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
  }, []);

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
            width: CANVAS_W,
            height: CANVAS_H,
            transformStyle: "preserve-3d",
            userSelect: "none",
            willChange: "transform",
          }}
        >
          {ITEMS.map((item, i) => {
            const base: React.CSSProperties = {
              position: "absolute",
              left: item.x,
              top: item.y,
              transform: `rotate(${item.rot}deg) translateZ(${item.z}px)`,
              transformStyle: "preserve-3d",
            };

            if (item.kind === "text") {
              return (
                <div key={i} style={{
                  ...base,
                  fontFamily: "Caveat, cursive",
                  fontSize: item.size,
                  lineHeight: 1.3,
                  color: "rgba(38,28,18,0.48)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.01em",
                }}>
                  {item.lines.map((line, j) => <div key={j}>{line}</div>)}
                </div>
              );
            }

            return (
              <div
                key={i}
                className="transition-[scale] duration-300 ease-out hover:scale-[1.025]"
                style={{ ...base }}
              >
                {/* white border only on photos — makes them read like prints */}
                <div style={{
                  display: "inline-block",
                  padding: item.kind === "photo" ? "5px" : "0",
                  background: item.kind === "photo" ? "#faf8f5" : "transparent",
                  boxShadow: item.kind === "photo"
                    ? "0 3px 20px rgba(0,0,0,0.13), 0 1px 5px rgba(0,0,0,0.07)"
                    : "none",
                }}>
                  <Image
                    src={item.src}
                    alt=""
                    width={item.w}
                    height={item.h}
                    style={{
                      width: item.w,
                      height: item.h,
                      objectFit: item.kind === "sketch" ? "contain" : "cover",
                      display: "block",
                    }}
                    draggable={false}
                    priority={i < 10}
                  />
                </div>
              </div>
            );
          })}
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
