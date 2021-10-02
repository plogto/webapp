import styles from "./PostCard.module.css";
import { Content, Header, Footer } from "./components";
import type { Post } from "@t/post";

type Props = {
  post: Post;
};

export function PostCard({ post }: Props) {
  const { id, isLiked, isSaved } = post;
  return (
    <div className={styles.wrapper}>
      <Header {...post.user} />
      <Content content={post.content} />
      <Footer id={id} isLiked={isLiked} isSaved={isSaved} />
    </div>
  );
}
