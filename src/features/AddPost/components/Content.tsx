import styles from "../AddPost.module.css";
import type { Post } from "@t/post";

type Props = {
  content: Post["content"];
};

export function Content({ content }: Props) {
  return <p className={styles.content}>{content}</p>;
}
