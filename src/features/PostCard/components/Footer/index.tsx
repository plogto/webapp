import Link from "next/link";
import { FooterPostCardProps } from "../../@types";
import styles from "../../PostCard.module.css";
import { usePostLike } from "../../hooks";
import { Icon } from "@components/Icon";
import { usePostSave } from "@features/PostCard/hooks/useSaveLike";
import { useNavigation } from "@hooks/useNavigation";

export function Footer(props: FooterPostCardProps) {
  const { commentsCounter, url } = props;
  const { isLiked, likePost, unlikePost } = usePostLike(props);
  const { isSaved, savePost, unsavePost } = usePostSave(props);
  const { formatPostPageRoute } = useNavigation();

  return (
    <div className={styles.footer}>
      <div>
        {isSaved ? (
          <button className={styles.iconWrapper} onClick={unsavePost}>
            <Icon
              name="bookmark"
              type="fill"
              className={`${styles.icon} ${styles.saved}`}
            />
          </button>
        ) : (
          <button className={styles.iconWrapper} onClick={savePost}>
            <Icon name="bookmark" type="outline" className={styles.icon} />
          </button>
        )}
        {isLiked ? (
          <button className={styles.iconWrapper} onClick={unlikePost}>
            <Icon
              name="heart"
              type="fill"
              className={`${styles.icon} ${styles.liked}`}
            />
          </button>
        ) : (
          <button className={styles.iconWrapper} onClick={likePost}>
            <Icon name="heart" type="outline" className={styles.icon} />
          </button>
        )}
      </div>
      {!!commentsCounter && (
        <Link href={formatPostPageRoute(url)}>
          <a className={styles.commentsCounter}>
            View all {commentsCounter} Comments
          </a>
        </Link>
      )}
    </div>
  );
}
