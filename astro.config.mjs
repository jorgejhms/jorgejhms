// @ts-check
import { defineConfig } from "astro/config";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

export default defineConfig({
  output: "static",
  vite: {
    plugins: [tsconfigPaths(), tailwindcss()],
  },

  site: "https://jorgejhms.net",
});