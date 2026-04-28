import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    // TanStack Router file-based routing (reads src/routes/)
    TanStackRouterVite({ autoCodeSplitting: true }),
    // React with Fast Refresh
    react(),
    // Tailwind CSS v4
    tailwindcss(),
    // TypeScript path aliases (@/* -> src/*)
    tsConfigPaths(),
  ],
});
