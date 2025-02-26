// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
  output: "server",
  integrations: [sitemap()],
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
});
