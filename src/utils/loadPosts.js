export const handleLoadPosts = async () => {
  const postResponse = fetch("https://jsonplaceholder.typicode.com/posts");
  const photosResponse = fetch("https://jsonplaceholder.typicode.com/photos");

  const [posts, photos] = await Promise.all([postResponse, photosResponse]);

  const postJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postJson.map((posts, index) => {
    return { ...posts, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
