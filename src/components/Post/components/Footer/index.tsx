import classNames from "classnames";
import styles from "../../Post.module.css";
import { Icon } from "@components/Icon";
import type { FooterPostProps } from "../../@types";

export function Footer(props: FooterPostProps) {
  const {
    id,
    size = "normal",
    isLiked,
    likePost,
    unlikePost,
    isSaved,
    savePost,
    unsavePost,
  } = props;

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
      <div>
        {isSaved?.id ? (
          <button className={styles.iconWrapper} onClick={() => unsavePost(id)}>
            <Icon name="bookmark" type="fill" className={bookmarkIconClasses} />
          </button>
        ) : (
          <button className={styles.iconWrapper} onClick={() => savePost(id)}>
            <Icon
              name="bookmark"
              type="outline"
              className={bookmarkIconClasses}
            />
          </button>
        )}
        {isLiked?.id ? (
          <button className={styles.iconWrapper} onClick={() => unlikePost(id)}>
            <Icon name="heart" type="fill" className={likeIconClasses} />
          </button>
        ) : (
          <button className={styles.iconWrapper} onClick={() => likePost(id)}>
            <Icon name="heart" type="outline" className={likeIconClasses} />
          </button>
        )}
      </div>
    </div>
  );
}
