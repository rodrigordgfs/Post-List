import PostCard from "../PostCard";
import styles from "./index.module.css";

export default function Posts({ posts }) {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
