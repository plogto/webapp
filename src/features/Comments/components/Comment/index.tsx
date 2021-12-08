import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CommentProps } from "../../@types";
import styles from "../../Comments.module.css";
import { Comments } from "../../containers";
import { useComment } from "../../hooks";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useDate } from "@hooks/useDate";
import { useNavigation } from "@hooks/useNavigation";

export function Comment(props: CommentProps) {
  const {
    comment,
    comment: {
      id,
      content,
      user,
      user: { username, fullName },
      isLiked: initialIsLiked,
      children,
      updatedAt,
    },
    type,
  } = props;
  const {
    onReply,
    onDelete,
    isLiked,
    likeComment,
    unlikeComment,
    showDeleteButton,
  } = useComment({
    id,
    user,
    isLiked: initialIsLiked,
  });
  const { t } = useTranslation("comment");
  const { formatProfilePageRoute } = useNavigation();
  const { formatFromNow } = useDate();
  const wrapper =
    type === "REPLY" ? styles.replyWrapper : styles.commentWrapper;

  return (
    <div className={wrapper} key={id}>
      <div className="flex-shrink-0">
        <Avatar className={styles.avatar} />
      </div>
      <div>
        <p className={styles.content}>
          <Link href={formatProfilePageRoute(username)}>
            <a className={styles.fullName}>{fullName}</a>
          </Link>
          {content}
        </p>

        <div className={styles.footer}>
          <span className={styles.date}>{formatFromNow(updatedAt)}</span>
          <span>&middot;</span>
          {isLiked ? (
            <button onClick={unlikeComment}>
              <Icon
                type="fill"
                name="heart"
                className={`${styles.icon} ${styles.liked}`}
              />
            </button>
          ) : (
            <button onClick={likeComment}>
              <Icon name="heart" className={styles.icon} />
            </button>
          )}
          <span>&middot;</span>
          <button
            type="button"
            onClick={() => onReply(comment)}
            className={styles.replyButton}
          >
            {t("buttons.reply")}
          </button>
          {showDeleteButton && (
            <>
              <span>&middot;</span>
              <button
                type="button"
                onClick={() => onDelete()}
                className={styles.deleteButton}
              >
                {t("buttons.delete")}
              </button>
            </>
          )}
        </div>
        {!!children?.pagination.totalDocs && (
          <div>
            <Comments type="REPLY" comments={children} />
          </div>
        )}
      </div>
    </div>
  );
}
