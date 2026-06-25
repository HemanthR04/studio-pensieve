/**
 * Generates blurDataURL base64 strings for project covers and hero images.
 * Outputs a JSON mapping of public path → base64 string.
 * Run: node scripts/gen-blur.mjs
 */

import sharp from "sharp";
import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const ROOT = new URL("..", import.meta.url).pathname;

// All images that need a blur placeholder
const TARGETS = [
  // Estate Retreat cover
  "public/Projects/Estate Retreat/1.jpg",
  // Hero slideshow
  "public/LANDING PHOTOS/1.jpg",
  "public/LANDING PHOTOS/2.jpg",
  "public/LANDING PHOTOS/3.jpg",
  "public/LANDING PHOTOS/4.jpg",
  "public/LANDING PHOTOS/5.jpg",
  // Project covers (first image of each project)
  "public/Projects/Emb Pristine / 1 Foyer.jpg",
  "public/Projects/Kishore Residence/1.jpg",
  "public/Projects/Uber Residence/1.jpg",
  "public/Projects/Tap Tales/1.jpg",
  "public/Projects/Vibranium/1.jpg",
  "public/Projects/Chanpatna/1.jpg",
  "public/Projects/Karjat/1.jpg",
  "public/Projects/Rajankunte/1.jpg",
  "public/Projects/RmK/1.jpg",
  "public/Projects/Godrej/1.jpg",
  "public/Projects/Rajiv/1.jpg",
  "public/Projects/Villa 1/2.jpg",
  // Team photo
  "public/Team/Team.jpeg",
];

const out = {};

for (const rel of TARGETS) {
  const abs = join(ROOT, rel);
  if (!existsSync(abs)) { console.warn("SKIP (not found):", rel); continue; }

  const buf = await sharp(abs)
    .resize(10, 10, { fit: "cover" })
    .jpeg({ quality: 40 })
    .toBuffer();

  out[rel] = `data:image/jpeg;base64,${buf.toString("base64")}`;
  console.log(`✓ ${rel}`);
}

await writeFile(join(ROOT, "src/data/blurDataUrls.json"), JSON.stringify(out, null, 2));
console.log(`\nWritten src/data/blurDataUrls.json (${Object.keys(out).length} entries)`);
