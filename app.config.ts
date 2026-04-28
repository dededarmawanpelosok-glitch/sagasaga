import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  spa: {
    enabled: true,
    prerender: {
      outputPath: "/index.html",
    },
  },
});
