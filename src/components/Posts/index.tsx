import type { Post } from "@t/post";
import { PostCard } from "@features/PostCard";
import styles from "./Posts.module.css";

// TODO: add loading prop and implement loading component
type Props = {
  posts?: Post[];
  className?: string;
};

export function Posts({ posts, className }: Props): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {posts &&
        posts.length > 0 &&
        posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
