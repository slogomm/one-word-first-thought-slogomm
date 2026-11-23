// One-word entry generator for the make.fun "One Word, First Thought" bounty.
// Reads MAKEFUN_OUTPUT_DIR (defaults to /output), creates it, and writes the single word "Snollygoster" to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH = "Snollygoster";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, PITCH, "utf8");