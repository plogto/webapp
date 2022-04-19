import { useTranslation } from "react-i18next";
import styles from "./Notifications.module.css";
import { Notification } from "./components/Notification";
import { useNotifications } from "./hooks/useNotifications";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";

export function Notifications() {
  const { notifications, unreadNotificationsCount } = useNotifications();
  const { t } = useTranslation("notifications");

  return (
    <Card className={styles.notifications}>
      <PageHeader
        title={t("texts.notifications")}
        rightSide={
          !!unreadNotificationsCount && (
            <span className={styles.unreadNotificationsCount}>
              {unreadNotificationsCount}
            </span>
          )
        }
      />

      {notifications?.map(notification => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Card>
  );
}
