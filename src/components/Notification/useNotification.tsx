import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { POST_CONTENT, RECEIVER_FULL_NAME, SENDER_FULL_NAME } from "@constants";
import { NotificationTypeName } from "@enums";
import { FullName } from "@components/FullName";
import type { IconNames } from "@components/Icon";
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
    [user],
  );

  function getNotificationIcon(
    notificationTypeName: NotificationTypeName,
  ): IconNames {
    switch (notificationTypeName) {
      case NotificationTypeName.WELCOME:
        return "Inbox";
      case NotificationTypeName.LIKE_POST:
        return "Heart";
      case NotificationTypeName.REPLY_POST:
        return "Comment";
      case NotificationTypeName.LIKE_REPLY:
        return "Heart";
      case NotificationTypeName.FOLLOW_USER:
        return "Plus";
      case NotificationTypeName.ACCEPT_USER:
        return "ThumbsUp";
      case NotificationTypeName.MENTION_IN_POST:
        return "At";
      default:
        return "Inbox";
    }
  }

  return { parseNotification, getNotificationIcon };
}
