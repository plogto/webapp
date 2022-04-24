import styles from "../../Themes.module.css";
import { Post } from "@components/Post";
import { POST_TYPES } from "@constants";
import { PREVIEW_POST } from "@features/Themes/constants";

export function PreviewPost() {
  return (
    <Post
      type={POST_TYPES.PREVIEW}
      className={styles.post}
      post={PREVIEW_POST}
    />
  );
}
