import classNames from "classnames";
import Link from "next/link";
import { DateType } from "@enums";
import { Avatar } from "@components/Avatar";
import { FullName } from "@components/FullName";
import { Status } from "@components/Status";
import { useDate } from "@hooks/useDate";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./TicketPreview.module.css";
import type { TicketPreviewProps } from "./TicketPreview.types";

export function TicketPreview(props: TicketPreviewProps) {
  const {
    ticket: {
      url,
      subject,
      status,
      lastMessage: { sender, message, createdAt },
    },
  } = props;

  const { formatFromNow } = useDate();
  const { formatTicketPageRoute } = useNavigator();
  const ticketPreviewClasses = classNames(styles.ticketPreview);

  return (
    <Link href={formatTicketPageRoute(url)} legacyBehavior>
      <a className={ticketPreviewClasses}>
        <div className={styles.headerWrapper}>
          <div className={styles.subject}>{subject}</div>
          <Status status={status} />
        </div>
        <p className={styles.message}>{message}</p>
        <div className={styles.footer}>
          <div className={styles.date}>
            {formatFromNow({ date: createdAt, type: DateType.SHORT })}
          </div>
          <span className={styles.separate}>·</span>
          <span className={styles.url}>#{url}</span>
          <Avatar
            className={styles.avatar}
            avatar={sender.avatar}
            alt={sender.fullName}
            size="tiny"
          />
          <FullName
            fullName={sender.fullName}
            isVerified={sender.isVerified}
            size="tiny"
          />
        </div>
      </a>
    </Link>
  );
}
