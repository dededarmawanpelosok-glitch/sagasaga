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
