import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { POST_CONTENT, RECEIVER_FULL_NAME, SENDER_FULL_NAME } from "@constants";
import { FullName } from "@components/FullName";
import { useAccountContext } from "@contexts/AccountContext";
import type { Notification } from "@t/notification";
import styles from "./Notification.module.css";

export function useNotification() {
  const { user } = useAccountContext();
  const parseNotification = useCallback(
    (element: string, notification: Notification) => {
      switch (element) {
        case RECEIVER_FULL_NAME:
          return (
            user && (
              <span key={uuid()} className={styles.fullName}>
                <FullName
                  fullName={user.fullName}
                  isVerified={user.isVerified}
                  size="small"
                />
              </span>
            )
          );
        case SENDER_FULL_NAME:
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
