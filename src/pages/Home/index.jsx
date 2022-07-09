import { useState, useCallback, useEffect } from "react";
import { loadPosts } from "../../utils/loadPosts";
import Posts from "../../components/Posts";
import styles from "./index.module.css";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const noMorePosts = () => page + perPage >= allPosts.length;
  const filteredPosts = () =>
    !!searchValue
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : posts;

  const handleLoadPosts = useCallback(async (page, perPage) => {
    const postAndPhotos = await loadPosts();
    setPosts(postAndPhotos.slice(page, perPage));
    setAllPosts(postAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, perPage);
  }, [handleLoadPosts, perPage]);

  const handleLoadMorePosts = () => {
    const nextPage = page + perPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + perPage);
    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <section className={styles.container}>
      <TextInput handleChange={handleChange} searchValue={searchValue} />
      {filteredPosts().length > 0 && (
        <>
          <Posts posts={filteredPosts()} />
          <div className={styles.buttonContainer}>
            <Button
              disabled={noMorePosts()}
              label="Load more posts"
              onButtonClick={handleLoadMorePosts}
            />
          </div>
        </>
      )}
    </section>
  );
}
