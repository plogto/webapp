import { FooterPostCardProps } from "../../@types";
import styles from "../../PostCard.module.css";
import { usePostLike } from "../../hooks";
import { Icon } from "@components/Icon";

export function Footer(props: FooterPostCardProps) {
  const { isLiked, likePost, unlikePost } = usePostLike(props);

  return (
    <div className={styles.footer}>
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
  );
}
