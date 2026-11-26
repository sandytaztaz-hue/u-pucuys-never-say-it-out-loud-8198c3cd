import fs from "node:fs";
import path from "node:path";

const LINE =
  "Your question had three parts. I answered the easiest one twice and hoped you would not notice.";

function outputDir(): string {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  const eq = process.argv.find((a) => a.startsWith("--output="));
  if (eq) return eq.slice("--output=".length);
  const i = process.argv.indexOf("--output");
  if (i >= 0 && process.argv[i + 1]) return process.argv[i + 1];
  return "/output";
}
const outDir = outputDir();
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
