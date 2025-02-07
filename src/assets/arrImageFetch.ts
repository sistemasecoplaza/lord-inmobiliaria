import { imageFetch } from "./imageFetch";

export const arrImageFetch = async (arr: any) => {
  return await Promise.all(
    arr.map((el: any) => {
      return imageFetch(el);
    })
  );
};
