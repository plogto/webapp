import { useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { NOTIFICATION_PARSER } from "@constants";
import { DateType } from "@enums";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useDate } from "@hooks/useDate";
import styles from "./Notification.module.css";
import type { NotificationProps } from "./Notification.types";
import { useNotification } from "./useNotification";

export function Notification(props: NotificationProps) {
  const {
    notification,
    notification: { url, notificationType, createdAt, read, sender },
  } = props;

  const { parseNotification, getNotificationIcon } = useNotification();
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
    <Link href={url} legacyBehavior>
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
        <div className={styles.iconWrapper}>
          <span className={styles.iconRing}>
            <Icon
              className={styles.icon}
              name={getNotificationIcon(notificationType.name)}
            />
          </span>
        </div>
      </a>
    </Link>
  );
}
