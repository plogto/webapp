import { useTranslation } from "react-i18next";
import styles from "../Notifications.module.css";
import { Notification } from "../components/Notification";
import { useNotifications } from "../hooks/useNotifications";
import { Card } from "@components/Card";

export function Notifications() {
  const { notifications, unreadNotificationsCount } = useNotifications();
  const { t } = useTranslation("notifications");

  return (
    <Card className={styles.notifications}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("texts.notifications")}</h2>
        {!!unreadNotificationsCount && (
          <span className={styles.unreadNotificationsCount}>
            {unreadNotificationsCount}
          </span>
        )}
      </div>
      {notifications?.map(notification => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Card>
  );
}
