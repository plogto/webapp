import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import styles from "../Notifications.module.css";
import { COMMENT_CONTENT, SENDER_USERNAME } from "@config";
import type { Notification } from "@t/notification";

export function useNotificationParser() {
  const parseNotification = useCallback(
    (element: string, notification: Notification) => {
      switch (element) {
        case SENDER_USERNAME:
          return (
            <span key={uuid()} className={styles.fullName}>
              {notification.sender.fullName}
            </span>
          );
        case COMMENT_CONTENT:
          return (
            <span key={uuid()} className={styles.comment}>
              {notification.comment?.content}
            </span>
          );
        default:
          return <span key={uuid()}>{element}</span>;
      }
    },
    [],
  );

  return { parseNotification };
}
