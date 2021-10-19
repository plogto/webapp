import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ReplyCommentProps } from "./@types";
import styles from "./ReplyComment.module.css";
import { Avatar } from "@components/Avatar";
import { useDate } from "@hooks/useDate";
import { useNavigation } from "@hooks/useNavigation";

export function ReplyComment(props: ReplyCommentProps) {
  const {
    comment,
    comment: {
      id,
      content,
      user: { username, fullname },
      updatedAt,
    },
    onReply,
  } = props;
  const { t } = useTranslation("comment");
  const { formatProfilePageRoute } = useNavigation();
  const { formatFromNow } = useDate();

  return (
    <div className={styles.replyWrapper} key={id}>
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
        </div>
      </div>
    </div>
  );
}
