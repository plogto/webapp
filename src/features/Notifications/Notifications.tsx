import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import { Notification } from "./Notification";
import styles from "./Notifications.module.css";
import { useNotifications } from "./hooks/useNotifications";

export function Notifications() {
  const {
    followRequestsCount = 0,
    notifications,
    unreadNotificationsCount,
  } = useNotifications();
  const { t } = useTranslation("notifications");

  const UnreadNotificationCount = !!unreadNotificationsCount && (
    <span className={styles.unreadNotificationsCount}>
      {unreadNotificationsCount}
    </span>
  );

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <PageHeader
          title={t("texts.notifications")}
          rightSide={UnreadNotificationCount}
          className={styles.mobileHeader}
        />
      ) : (
        <div className={styles.header}>
          <span className={styles.title}>{t("texts.notifications")}</span>
          {UnreadNotificationCount}
        </div>
      )}
      <Card
        className={styles.notifications}
        shadow={!isMobile}
        rounded={!isMobile}
      >
        {followRequestsCount > 0 && (
          <Link href={PageUrls.FOLLOW_REQUESTS}>
            <a className={styles.followRequests}>{t("texts.followRequests")}</a>
          </Link>
        )}

        {notifications?.map(notification => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </Card>
    </div>
  );
}
