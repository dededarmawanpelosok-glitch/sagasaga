// vite.config.ts is intentionally minimal.
// All configuration is handled in app.config.ts via @tanstack/react-start/config.
// The tanstackStart plugin (included via app.config.ts) manages:
//   - TanStack Router file-based routing
//   - React plugin
//   - Tailwind CSS
//   - TypeScript path aliases (@/*)
//   - SPA mode shell generation
import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  spa: {
    enabled: true,
  },
  vite: {
    plugins: [tsConfigPaths()],
  },
});
