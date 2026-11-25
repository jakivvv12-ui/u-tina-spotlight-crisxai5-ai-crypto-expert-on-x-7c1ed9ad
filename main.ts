import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const post = { url: "https://x.com/<handle>/status/<id>" };
if (!post.url.startsWith("https://x.com/")) {
  throw new Error("POST.json url must point to X");
}
writeFileSync(join(outDir, "POST.json"), JSON.stringify(post) + "\n");
