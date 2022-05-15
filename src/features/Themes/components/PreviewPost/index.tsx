import { POST_TYPES } from "@constants";
import { Post } from "@components/Post";
import { PREVIEW_POST } from "@features/Themes/constants";
import styles from "../../Themes.module.css";

export function PreviewPost() {
  return (
    <Post
      type={POST_TYPES.PREVIEW}
      className={styles.post}
      post={PREVIEW_POST}
    />
  );
}
