import { WORDPRESS_URL_MEDIA } from "astro:env/client";

export const imageFetch = async (id: string): Promise<string> => {
  return (
    await (
      await fetch(
        "https://headless-wordpress.lordinmobiliaria.pe/wp-json/wp/v2/media/" +
          id
      )
    ).json()
  ).source_url;
};
