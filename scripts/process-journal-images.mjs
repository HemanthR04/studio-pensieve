/**
 * One-shot (re-runnable) migration for public/Journal Pictures:
 *   - Reads every image in the folder (HEIC/PNG/WEBP/JPEG, mixed phone exports),
 *     converts to JPEG at 80 quality (mozjpeg), auto-orients from EXIF, flattens
 *     any alpha onto white.
 *   - HEIC/heic files are pre-converted via macOS `sips` (sharp's bundled libvips
 *     here has no HEIF codec), then piped through sharp for compression.
 *   - Renames sequentially (1.jpg, 2.jpg, …) ordered by original file mtime, so
 *     the journal reads roughly chronologically.
 *   - Writes src/data/journalImages.json: [{ file, width, height }, …] — the
 *     compressed, post-rotation pixel size of each image, consumed by
 *     JournalCanvas to lay images out with correct aspect ratios.
 *
 * Run: node scripts/process-journal-images.mjs
 */

import sharp from "sharp";
import { execFileSync } from "child_process";
import { readdir, stat, readFile, writeFile, unlink, mkdtemp, rm, rename } from "fs/promises";
import { join, extname } from "path";
import { tmpdir } from "os";

const ROOT        = new URL("..", import.meta.url).pathname;
const JOURNAL_DIR = join(ROOT, "public/Journal Pictures");
const STAGING_DIR  = join(JOURNAL_DIR, "__staging");
const MANIFEST     = join(ROOT, "src/data/journalImages.json");
const JPEG_QUALITY = 80;

function mb(b) { return (b / 1024 / 1024).toFixed(2) + " MB"; }

async function heicToJpegBuffer(file) {
  const dir = await mkdtemp(join(tmpdir(), "heic-"));
  const out = join(dir, "out.jpg");
  try {
    execFileSync("sips", ["-s", "format", "jpeg", file, "--out", out], { stdio: "pipe" });
    return await readFile(out);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

async function main() {
  const entries = await readdir(JOURNAL_DIR, { withFileTypes: true });
  const files = entries
    .filter(e => e.isFile() && !e.name.startsWith("."))
    .map(e => join(JOURNAL_DIR, e.name));

  // Sort by original mtime so the journal flows roughly chronologically
  const withStats = await Promise.all(files.map(async f => ({ f, mtime: (await stat(f)).mtimeMs })));
  withStats.sort((a, b) => a.mtime - b.mtime);

  await rm(STAGING_DIR, { recursive: true, force: true });
  const { mkdir } = await import("fs/promises");
  await mkdir(STAGING_DIR, { recursive: true });

  let totalBefore = 0, totalAfter = 0;
  const manifest = [];

  for (let i = 0; i < withStats.length; i++) {
    const { f } = withStats[i];
    const ext = extname(f).toLowerCase();
    const before = (await stat(f)).size;
    totalBefore += before;

    const input = ext === ".heic" ? await heicToJpegBuffer(f) : await readFile(f);

    const { data, info } = await sharp(input)
      .rotate()
      .flatten({ background: "#ffffff" })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer({ resolveWithObject: true });

    const outName = `${i + 1}.jpg`;
    await writeFile(join(STAGING_DIR, outName), data);
    totalAfter += data.length;

    manifest.push({ file: `/Journal Pictures/${outName}`, width: info.width, height: info.height });
    console.log(`${String(i + 1).padStart(2, "0")}  ${f.replace(ROOT, "")}  ${mb(before)} → ${mb(data.length)}`);
  }

  // Only now that every conversion succeeded: clear originals and promote staged files
  for (const f of files) await unlink(f);
  for (const { file } of manifest) {
    const name = file.replace("/Journal Pictures/", "");
    await rename(join(STAGING_DIR, name), join(JOURNAL_DIR, name));
  }
  await rm(STAGING_DIR, { recursive: true, force: true });

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");

  console.log(`\n─────────────────────────────────────────────`);
  console.log(`${manifest.length} images processed`);
  console.log(`Total before : ${mb(totalBefore)}`);
  console.log(`Total after  : ${mb(totalAfter)}`);
  console.log(`Saved        : ${mb(totalBefore - totalAfter)}  (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`);
  console.log(`\nWritten ${MANIFEST.replace(ROOT, "")}`);
}

main();
