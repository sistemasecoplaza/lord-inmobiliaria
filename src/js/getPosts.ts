import { WORDPRESS_URL } from "astro:env/client";

export const getPosts = async (post: string) => {
  const res = await (await fetch(WORDPRESS_URL + post)).json();
  return res[0].acf;
};
