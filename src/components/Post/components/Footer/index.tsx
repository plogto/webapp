import { FooterPostProps } from "../../@types";
import styles from "../../Post.module.css";
import { Comments } from "@components/Comments";
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
    showComments,
    comments,
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
      {!showComments && !!commentsCounter && (
        <div className={styles.commentsCounter}>
          View all {commentsCounter} Comments
        </div>
      )}
      {showComments && <Comments comments={comments} />}
    </div>
  );
}
