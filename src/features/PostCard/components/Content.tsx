import type { Post } from "@/@types/post";
import styles from "../PostCard.module.css";

type Props = {
  content: Post["content"];
};

export default function Content({ content }: Props) {
  return <p className={styles.content}>{content}</p>;
}
