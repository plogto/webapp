import classNames from "classnames";
import Link from "next/link";
import { useMemo } from "react";
import styles from "../../Notifications.module.css";
import { Avatar } from "@components/Avatar";
import { notificationParser } from "@config";
import { NotificationProps } from "@features/Notifications/@types";
import { useNotificationParser } from "@features/Notifications/hooks/useNotificationParser";
import { useDate } from "@hooks/useDate";

export function Notification(props: NotificationProps) {
  const {
    notification,
    notification: { url, notificationType, createdAt, read },
  } = props;

  const { parseNotification } = useNotificationParser();
  const { formatFromNow } = useDate();

  const template = useMemo(
    () => notificationType.template.split(notificationParser.KEY_PATTERN),
    [notificationType.template],
  );

  const notificationClasses = classNames(
    styles.notification,
    !read && styles.unreadNotification,
  );

  return (
    <Link href={`/${url}`}>
      <a className={notificationClasses}>
        <div>
          <Avatar className={styles.avatar} />
        </div>
        <div className={styles.content}>
          {template.map(element => parseNotification(element, notification))}
          <div className={styles.date}>{formatFromNow(createdAt)}</div>
        </div>
      </a>
    </Link>
  );
}
