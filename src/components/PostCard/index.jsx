import styles from './index.module.css';

export const PostCard = ({ post }) => {
  const { cover, title, body } = post;
  return (
    <div className={styles.post}>
      <img src={cover} alt={title} />
      <div className={styles.postContent}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

