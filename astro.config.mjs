// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      WORDPRESS_URL: envField.string({ context: "client", access: "public" }),
      WORDPRESS_URL_MEDIA: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  integrations: [sitemap()],
  adapter: vercel(),
});
