import { useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { NOTIFICATION_PARSER } from "@constants";
import { DateType } from "@enums";
import { Avatar } from "@components/Avatar";
import { useDate } from "@hooks/useDate";
import styles from "./Notifications.module.css";
import type { NotificationProps } from "./Notifications.types";
import { useNotificationParser } from "./hooks/useNotificationParser";

export function Notification(props: NotificationProps) {
  const {
    notification,
    notification: { url, notificationType, createdAt, read, sender },
  } = props;

  const { parseNotification } = useNotificationParser();
  const { formatFromNow } = useDate();

  const template = useMemo(
    () => notificationType.template.split(NOTIFICATION_PARSER.KEY_PATTERN),
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
          <Avatar
            className={styles.avatar}
            avatar={sender.avatar}
            alt={sender.fullName}
          />
        </div>
        <div className={styles.content}>
          {template.map(element => parseNotification(element, notification))}
          <div className={styles.date}>
            {formatFromNow({ date: createdAt, type: DateType.SHORT })}
          </div>
        </div>
      </a>
    </Link>
  );
}