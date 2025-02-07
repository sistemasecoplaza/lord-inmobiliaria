import { WORDPRESS_URL_MEDIA } from "astro:env/client";

export const imageFetch = async (id: string) => {
  return (await (await fetch(WORDPRESS_URL_MEDIA + id)).json()).source_url;
};
