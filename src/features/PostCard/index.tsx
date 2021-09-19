import styles from "./PostCard.module.css";
import { Content, Header } from "./components";
import type { Post } from "@t/post";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  return (
    <div className={styles.wrapper}>
      <Header {...post.user} />
      <Content content={post.content} />
    </div>
  );
}
