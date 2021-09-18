import type { Post } from "@t/post";
import styles from "./PostCard.module.css";
import { Header, Content } from "./components";

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
