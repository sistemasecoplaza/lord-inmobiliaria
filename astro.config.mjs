// @ts-check
import { defineConfig, envField } from "astro/config";
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
  env: {
    schema: {
      WORDPRESS_URL: envField.string({ context: "client", access: "public" }),
      WORDPRESS_URL_MEDIA: envField.string({
        context: "client",
        access: "public",
      }),
      FORM_URL_POST: envField.string({
        context: "client",
        access: "public",
      }),
    },
  },
  output: "server",
  site: "https://lord-inmobiliaria.up.railway.app/",
  integrations: [sitemap()],
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: "0.0.0.0",
  },
});

// http://lord-backend.railway.internal:3000/form
