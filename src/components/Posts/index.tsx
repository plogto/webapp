import { Post } from "@/@types/post";
import PostCard from "@/features/PostCard";
import styles from "./Posts.module.css";

// TODO: add loading prop and implement loading component
type Props = {
  posts?: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div className={styles.container}>
      {posts &&
        posts.length > 0 &&
        posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}
