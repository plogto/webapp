import Link from "next/link";
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
  const { formatProfilePageRoute } = useNavigation();
  const { formatFromNow } = useDate();

  return (
    <div className={styles.comment} key={id}>
      <div className="flex-shrink-0">
        <Avatar className={styles.avatar} />
      </div>
      <div>
        <div className={styles.fullname}>
          <Link href={formatProfilePageRoute(username)}>{fullname}</Link>
        </div>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
        <div className={styles.footer}>
          <span className={styles.date}>{formatFromNow(updatedAt)}</span>
          <span>&middot;</span>
          <button type="button" className={styles.reply}>
            Reply
          </button>
        </div>
      </div>
    </div>
  );
}
