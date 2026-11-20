// GTA 6 clipper entry (Node 22, standard library only).
//
// The video itself is the entry: the house reads it from YouTube, so this
// program only hands VIDEO.json over. It copies VIDEO.json from the
// repository root to the output directory, byte for byte, and does nothing
// else: no network, no clock, no files outside the repository.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, 'VIDEO.json'), join(outDir, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
