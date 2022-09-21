import classNames from "classnames";
import { DateType } from "@enums";
import { Img } from "@components/Img";
import { UserInfo } from "@components/UserInfo";
import { useDate } from "@hooks/useDate";
import styles from "./TicketMessage.module.css";
import type { TicketMessageProps } from "./TicketMessage.types";

export function TicketMessage(props: TicketMessageProps) {
  const {
    ticketMessage: { sender, message, attachment, createdAt },
  } = props;

  const { formatFromNow } = useDate();
  const ticketClasses = classNames(styles.ticketMessage);

  return (
    <a className={ticketClasses}>
      <div className={styles.headerWrapper}>
        <UserInfo size="small" user={sender} />
      </div>
      {attachment?.length > 0 && (
        <div className={styles.attachment}>
          <Img alt={message} image={attachment[0]} />
        </div>
      )}
      <p className={styles.message}>{message}</p>
      <div className={styles.footer}>
        <div className={styles.date}>
          {formatFromNow({ date: createdAt, type: DateType.SHORT })}
        </div>
      </div>
    </a>
  );
}
