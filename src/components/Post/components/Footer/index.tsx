import { FooterPostProps } from "../../@types";
import styles from "../../Post.module.css";
import { Icon } from "@components/Icon";

export function Footer(props: FooterPostProps) {
  const {
    isLiked,
    likePost,
    unlikePost,
    isSaved,
    savePost,
    unsavePost,
    commentsCounter,
    showCommentsCounter,
  } = props;

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
      {showCommentsCounter && !!commentsCounter && (
        <div className={styles.commentsCounter}>
          View all {commentsCounter} Comments
        </div>
      )}
    </div>
  );
}
