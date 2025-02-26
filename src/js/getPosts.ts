export const getPosts = async (post: string) => {
  const res = await (
    await fetch(
      "https://headless-wordpress.lordinmobiliaria.pe/wp-json/wp/v2/" + post
    )
  ).json();
  return res[0].acf;
};
