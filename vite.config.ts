// vite.config.ts — re-exports app.config.ts as the single source of truth.
// app.config.ts uses @tanstack/react-start/config which returns a valid Vite config
// with all required plugins (TanStack Router, React, Tailwind, tsConfigPaths, SPA mode).
export { default } from "./app.config";
