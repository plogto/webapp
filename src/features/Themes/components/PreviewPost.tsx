import { POST_TYPES } from "@constants";
import { Card } from "@components/Card";
import { Post } from "@components/Post";
import { PREVIEW_POST } from "@features/Themes/Themes.types";
import styles from "../Themes.module.css";

export function PreviewPost() {
  return (
    <Card shadow rounded className="overflow-hidden">
      <Post
        type={POST_TYPES.PREVIEW}
        className={styles.post}
        post={PREVIEW_POST}
      />
    </Card>
  );
}
