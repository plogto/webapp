import classNames from "classnames";
import Link from "next/link";
import { Icon } from "@components/Icon";
import { useLikePost } from "@components/Post/hooks/useLikePost";
import { useSavePost } from "@components/Post/hooks/useSavePost";
import { useNavigator } from "@hooks/useNavigator";
import styles from "../Post.module.css";
import type { FooterPostProps } from "../Post.types";

export function Footer(props: FooterPostProps) {
  const { postId, url, size = "normal", isLiked, isSaved } = props;

  const { formatAddPostPageRoute } = useNavigator();

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
  const replyIconClasses = classNames(styles.icon, styles[size]);

  return (
    <div className={wrapperClasses}>
      <button className={styles.iconWrapper} onClick={savePost}>
        <Icon
          name={isSaved?.id ? "BookmarkFill" : "Bookmark"}
          className={bookmarkIconClasses}
        />
      </button>
      <button className={styles.iconWrapper} onClick={likePost}>
        <Icon
          name={isLiked?.id ? "HeartFill" : "Heart"}
          className={likeIconClasses}
        />
      </button>
      <Link href={formatAddPostPageRoute(url)} legacyBehavior>
        <a className={styles.iconWrapper}>
          <Icon className={replyIconClasses} name="Comment" />
        </a>
      </Link>
    </div>
  );
}
