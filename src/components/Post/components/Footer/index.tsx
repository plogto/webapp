import classNames from "classnames";
import styles from "../../Post.module.css";
import { Icon } from "@components/Icon";
import { useLikePost } from "@components/Post/hooks/useLikePost";
import { useSavePost } from "@components/Post/hooks/useSavePost";
import type { FooterPostProps } from "../../@types";

export function Footer(props: FooterPostProps) {
  const { postId, size = "normal", isLiked, isSaved } = props;

  const { likePost } = useLikePost({ postId });
  const { savePost } = useSavePost({ postId });

  const wrapperClasses = classNames(styles.footer, styles[size]);
  const bookmarkIconClasses = classNames(
    isSaved?.id && styles.saved,
    styles.icon,
    styles[size],
  );
  const likeIconClasses = classNames(
    isLiked?.id && styles.liked,
    styles.icon,
    styles[size],
  );

  return (
    <div className={wrapperClasses}>
      <button className={styles.iconWrapper} onClick={savePost}>
        <Icon
          name="bookmark"
          type={isSaved?.id ? "fill" : "outline"}
          className={bookmarkIconClasses}
        />
      </button>
      <button className={styles.iconWrapper} onClick={likePost}>
        <Icon
          name="heart"
          type={isLiked?.id ? "fill" : "outline"}
          className={likeIconClasses}
        />
      </button>
    </div>
  );
}
