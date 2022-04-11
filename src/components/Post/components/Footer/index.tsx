import classNames from "classnames";
import Link from "next/link";
import styles from "../../Post.module.css";
import { Icon } from "@components/Icon";
import { useLikePost } from "@components/Post/hooks/useLikePost";
import { useSavePost } from "@components/Post/hooks/useSavePost";
import { useNavigation } from "@hooks/useNavigation";
import type { FooterPostProps } from "../../@types";

export function Footer(props: FooterPostProps) {
  const { postId, url, size = "normal", isLiked, isSaved } = props;

  const { formatReplyPostPageRoute } = useNavigation();

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
      <Link href={formatReplyPostPageRoute(url)}>
        <a className={styles.iconWrapper}>
          <Icon className={replyIconClasses} name="comment" type="outline" />
        </a>
      </Link>
    </div>
  );
}
