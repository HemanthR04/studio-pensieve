/**
 * Generates blurDataURL base64 strings for project covers and hero images.
 * Outputs a JSON mapping of public path → base64 string.
 * Run: node scripts/gen-blur.mjs
 */

import sharp from "sharp";
import { writeFile, readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const ROOT = new URL("..", import.meta.url).pathname;

// All images that need a blur placeholder
const TARGETS = [
  // Estate Retreat cover/hero
  "public/Projects/Estate Retreat/1.jpg",
  // Hero slideshow
  "public/LANDING PHOTOS/1.jpg",
  "public/LANDING PHOTOS/2.jpg",
  "public/LANDING PHOTOS/3.jpg",
  "public/LANDING PHOTOS/4.jpg",
  "public/LANDING PHOTOS/5.jpg",
  // Project hero/cover images
  "public/Projects/Vana/ 1 Foyer.jpg",
  "public/Projects/Adapted House/1.jpg",
  "public/Projects/RMK Antheia/1.jpg",
  "public/Projects/Lime & Light Residence/1.jpg",
  "public/Projects/Lime & Light Residence/2.jpg",
  "public/Projects/Tap Tales/1.jpg",
  "public/Projects/Zion House/1.jpg",
  "public/Projects/Vibranium Office/1.jpg",
  "public/Projects/Verandah House/1.jpg",
  "public/Projects/Villa 1/1.jpg",
  "public/Projects/Villa 1/2.jpg",
  "public/Projects/Twin Roof Farmhouse/1.jpg",
  "public/Projects/Olive House/1.jpg",
  "public/Projects/Olive House/4.jpg",
  "public/Projects/Mana/1.jpg",
  "public/Projects/Mana/9.jpg",
  // Team photo
  "public/Team/Team.jpeg",
];

// Load existing entries so we only recompute what changed
let existing = {};
const outPath = join(ROOT, "src/data/blurDataUrls.json");
try {
  existing = JSON.parse(await readFile(outPath, "utf8"));
} catch { /* file doesn't exist yet */ }

const out = { ...existing };

for (const rel of TARGETS) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { console.warn("SKIP (not found):", rel); continue; }
  if (out[rel]) { console.log(`cached ${rel}`); continue; }

  const buf = await sharp(abs)
    .resize(10, 10, { fit: "cover" })
    .jpeg({ quality: 40 })
    .toBuffer();

  out[rel] = `data:image/jpeg;base64,${buf.toString("base64")}`;
  console.log(`✓ ${rel}`);
}

await writeFile(outPath, JSON.stringify(out, null, 2));
console.log(`\nWritten src/data/blurDataUrls.json (${Object.keys(out).length} entries)`);
