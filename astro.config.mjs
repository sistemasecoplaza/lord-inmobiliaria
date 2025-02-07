import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  experimental: {
    svg: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://lord-inmobiliaria.vercel.app/",

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
});
