#!/usr/bin/env node
/**
 * post-build.mjs
 * Memindahkan output dari dist/client ke dist/ agar Vercel bisa menemukannya.
 * TanStack Start dengan SPA mode menghasilkan file di dist/client/
 */
import { existsSync, cpSync, rmSync } from "fs";
import { resolve } from "path";

const distClient = resolve("dist/client");
const dist = resolve("dist");

if (existsSync(distClient)) {
  console.log("📦 Moving dist/client → dist ...");
  cpSync(distClient, dist, { recursive: true, force: true });
  rmSync(distClient, { recursive: true, force: true });
  console.log("✅ Done! Static files are now in dist/");
} else {
  console.log("ℹ️  dist/client not found, assuming output is already in dist/");
}
