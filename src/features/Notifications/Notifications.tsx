import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import { useNotifications } from "@hooks/useNotifications";
import { Notification } from "./Notification";
import styles from "./Notifications.module.css";

export function Notifications() {
  const { followRequestsCount = 0, notifications } = useNotifications();
  const { t } = useTranslation("notifications");

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <PageHeader
          title={t("texts.notifications")}
          className={styles.mobileHeader}
        />
      ) : (
        <div className={styles.header}>
          <span className={styles.title}>{t("texts.notifications")}</span>
        </div>
      )}
      <Card
        className={styles.notifications}
        shadow={!isMobile}
        rounded={!isMobile}
      >
        {followRequestsCount > 0 && (
          <Link href={PageUrls.FOLLOW_REQUESTS}>
            <a className={styles.followRequests}>
              {t("texts.followRequests")}({followRequestsCount})
            </a>
          </Link>
        )}

        {notifications?.map(notification => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </Card>
    </div>
  );
}
