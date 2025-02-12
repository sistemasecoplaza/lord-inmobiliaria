import { imageFetch } from "./ImageFetch";

export const arrImageFetch = async (arr: any) => {
  return await Promise.all(
    arr.map((el: any) => {
      return imageFetch(el);
    })
  );
};
