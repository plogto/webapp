import styles from "./Posts.module.css";
import { PostCard } from "@features/PostCard";
import type { PostsProps } from "./@types";

export function Posts(props: PostsProps) {
  const { posts, className } = props;
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {posts &&
        posts.length > 0 &&
        posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
