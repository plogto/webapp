import Link from "next/link";
import { useTranslation } from "react-i18next";
import { CommentProps } from "./@types";
import styles from "./Comment.module.css";
import { Avatar } from "@components/Avatar";
import { useDate } from "@hooks/useDate";
import { useNavigation } from "@hooks/useNavigation";

export function Comment(props: CommentProps) {
  const {
    comment: {
      id,
      content,
      user: { username, fullname },
      updatedAt,
    },
  } = props;
  const { t } = useTranslation("comment");
  const { formatProfilePageRoute } = useNavigation();
  const { formatFromNow } = useDate();

  return (
    <div className={styles.comment} key={id}>
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
          <button type="button" className={styles.reply}>
            {t("reply")}
          </button>
        </div>
      </div>
    </div>
  );
}
