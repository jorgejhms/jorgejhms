// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://jorgejhms.net",
});