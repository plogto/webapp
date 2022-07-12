import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { POST_CONTENT, SENDER_USERNAME } from "@constants";
import { FullName } from "@components/FullName";
import type { Notification } from "@t/notification";
import styles from "./Notification.module.css";

export function useNotification() {
  const parseNotification = useCallback(
    (element: string, notification: Notification) => {
      switch (element) {
        case SENDER_USERNAME:
          return (
            <span key={uuid()} className={styles.fullName}>
              <FullName
                fullName={notification.sender.fullName}
                isVerified={notification.sender.isVerified}
                size="small"
              />
            </span>
          );
        case POST_CONTENT:
          return (
            <span key={uuid()} className={styles.reply}>
              {notification.reply?.content}
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
