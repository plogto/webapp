import type { Post } from "@/@types/post";
import styles from "./PostCard.module.css";
import Header from "./components/Header";
import Content from "./components/Content";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className={styles.wrapper}>
      <Header {...post.user} />
      <Content content={post.content} />
    </div>
  );
}
