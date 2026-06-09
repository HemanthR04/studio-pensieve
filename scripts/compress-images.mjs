/**
 * Compresses all project images:
 *   - JPEG/JPG → re-encode at 80 quality (in-place)
 *   - PNG in public/Projects → convert to JPEG at 80 quality, delete original PNG
 *   - public/sketches PNGs → skip (tiny, may have transparency)
 *
 * Also patches src/data/projects.ts and src/components/JournalCanvas.tsx
 * to replace .png → .jpg for any converted files.
 */

import sharp from "sharp";
import { readdir, stat, readFile, writeFile, unlink } from "fs/promises";
import { join, extname, basename, dirname } from "path";

const ROOT          = new URL("..", import.meta.url).pathname;
const PROJECTS_DIR  = join(ROOT, "public/Projects");
const LANDING_DIR   = join(ROOT, "public/LANDING PHOTOS");
const JPEG_QUALITY  = 80;

let totalBefore = 0;
let totalAfter  = 0;
const converted = []; // { from, to } pairs for code patching

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = join(dir, e.name);
    if (e.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

async function processFile(file) {
  const ext  = extname(file).toLowerCase();
  const s    = await stat(file);
  const before = s.size;

  if (ext === ".jpg" || ext === ".jpeg") {
    const buf = await sharp(file).jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    await writeFile(file, buf);
    const after = buf.length;
    totalBefore += before;
    totalAfter  += after;
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`JPEG  ${rel(file)}  ${mb(before)} → ${mb(after)}  (${saved}% saved)`);

  } else if (ext === ".png") {
    const jpgPath = file.replace(/\.png$/i, ".jpg");
    const buf = await sharp(file).jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();
    await writeFile(jpgPath, buf);
    await unlink(file);
    const after = buf.length;
    totalBefore += before;
    totalAfter  += after;
    const saved = ((1 - after / before) * 100).toFixed(1);
    console.log(`PNG→JPG  ${rel(file)}  ${mb(before)} → ${mb(after)}  (${saved}% saved)`);
    converted.push({ from: file, to: jpgPath });
  }
}

function rel(p) { return p.replace(ROOT, ""); }
function mb(b)  { return (b / 1024 / 1024).toFixed(2) + " MB"; }

// ── main ──────────────────────────────────────────────────────────

const projectFiles = await walk(PROJECTS_DIR);
const landingFiles = await walk(LANDING_DIR);
const files = [...projectFiles, ...landingFiles];
console.log(`\nProcessing ${files.length} files in public/Projects + public/LANDING PHOTOS…\n`);

for (const f of files) {
  const ext = extname(f).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".png") {
    await processFile(f);
  }
}

console.log(`\n─────────────────────────────────────────────`);
console.log(`Total before : ${mb(totalBefore)}`);
console.log(`Total after  : ${mb(totalAfter)}`);
console.log(`Saved        : ${mb(totalBefore - totalAfter)}  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);

// ── patch source files ────────────────────────────────────────────

if (converted.length === 0) {
  console.log("\nNo PNG→JPEG conversions — no source files to patch.");
  process.exit(0);
}

console.log(`\nPatching source files for ${converted.length} PNG→JPEG conversions…`);

const SRC_FILES = [
  join(ROOT, "src/data/projects.ts"),
  join(ROOT, "src/components/JournalCanvas.tsx"),
  join(ROOT, "src/components/Hero.tsx"),
];

for (const srcFile of SRC_FILES) {
  let content = await readFile(srcFile, "utf8");
  let patched = false;

  for (const { from } of converted) {
    // Build the filename as it appears in source: e.g. "1.png"
    const pngName = basename(from);     // "1.png"
    const jpgName = pngName.replace(/\.png$/i, ".jpg");

    if (content.includes(pngName)) {
      content = content.replaceAll(pngName, jpgName);
      patched = true;
    }
  }

  if (patched) {
    await writeFile(srcFile, content, "utf8");
    console.log(`  Patched ${rel(srcFile)}`);
  }
}

console.log("\nDone.");
