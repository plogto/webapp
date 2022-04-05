import styles from "../../AddPost.module.css";
import type { ContentProps } from "@features/AddPost/@types";

export function Content({ content }: ContentProps) {
  return <p className={styles.content}>{content}</p>;
}
