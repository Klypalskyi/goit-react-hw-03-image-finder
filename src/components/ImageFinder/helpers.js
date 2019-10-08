export const apiKey = '13839766-460ea5cbfd5c036a6d520e55a';

export const parseArr = arr => {
  const parsedArr = [];
  arr.map(el => {
    const parsedImage = {
      id: el.id,
      webformatURL: el.webformatURL,
      largeImageURL: el.largeImageURL,
      likes: el.likes,
      views: el.views,
      comments: el.comments,
      downloads: el.downloads,
    };
    return parsedArr.push(parsedImage);
  });
  return parsedArr;
};
