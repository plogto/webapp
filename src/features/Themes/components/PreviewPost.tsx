import { POST_TYPES } from "@constants";
import { Card } from "@components/Card";
import { Post } from "@components/Post";
import styles from "../Themes.module.css";
import { useThemes } from "../useThemes";

export function PreviewPost() {
  const { PREVIEW_POST } = useThemes();
  return (
    <Card
      isLoading={!PREVIEW_POST?.user}
      shadow
      rounded
      className="overflow-hidden"
    >
      <Post
        type={POST_TYPES.PREVIEW}
        className={styles.post}
        post={PREVIEW_POST}
      />
    </Card>
  );
}
