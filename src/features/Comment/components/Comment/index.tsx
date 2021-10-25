import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CommentProps } from "../../@types";
import styles from "../../Comment.module.css";
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
      user: { username, fullname },
      isLiked: initialIsLiked,
      children,
      updatedAt,
    },
    type,
  } = props;
  const { onReply, isLiked, likeComment, unlikeComment } = useComment({
    id,
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
            <a className={styles.fullname}>{fullname}</a>
          </Link>
          {content}
        </p>

        <div className={styles.footer}>
          <span className={styles.date}>{formatFromNow(updatedAt)}</span>
          <span>&middot;</span>
          <button
            type="button"
            onClick={() => onReply(comment)}
            className={styles.reply}
          >
            {t("reply")}
          </button>
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
