// GTA 6 clipper entry (Node 22, standard library only).
//
// The video itself is the entry: the house reads it from YouTube, so this
// program only hands VIDEO.json over. It copies VIDEO.json from the
// repository root to the output directory, byte for byte, and does nothing
// else: no network, no clock, no files outside the repository.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(botDir, 'VIDEO.json');
try {
  const parsed = JSON.parse(readFileSync(videoPath, 'utf8'));
  if (typeof parsed.url !== 'string' || parsed.url.trim() === '') {
    console.error('VIDEO.json is invalid: missing a non-empty string field "url".');
    process.exit(1);
  }
} catch (err) {
  if (err instanceof SyntaxError) {
    console.error(`VIDEO.json is not valid JSON: ${err.message}`);
  } else {
    console.error(`VIDEO.json could not be read from ${botDir}: ${err instanceof Error ? err.message : String(err)}`);
  }
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(videoPath, join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${botDir}: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
