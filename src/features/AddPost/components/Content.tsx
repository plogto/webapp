import type { Post } from "@t/post";
import styles from "../AddPost.module.css";

type Props = {
  content: Post["content"];
};

export function Content({ content }: Props) {
  return <p className={styles.content}>{content}</p>;
}
