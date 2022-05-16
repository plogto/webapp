import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import styles from "./Notifications.module.css";
import { Notification } from "./components/Notification";
import { useNotifications } from "./hooks/useNotifications";
import Link from "next/link";

export function Notifications() {
  const { followRequestsCount, notifications, unreadNotificationsCount } =
    useNotifications();
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

      {followRequestsCount && followRequestsCount > 0 && (
        <Link href={PageUrls.FOLLOW_REQUESTS}>
          <a className={styles.followRequests}>{t("texts.followRequests")}</a>
        </Link>
      )}

      {notifications?.map(notification => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </Card>
  );
}
