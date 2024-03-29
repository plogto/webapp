import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Card } from "@components/Card";
import { NotificationsList } from "@components/NotificationsList";
import { PageHeader } from "@components/PageHeader";
import { PageUrls } from "@enums/pages";
import { useCounters } from "@hooks/useCounters";
import styles from "./Notifications.module.css";
import { useNotifications } from "./useNotifications";

export function Notifications() {
  const {
    followRequestsCount = 0,
    data,
    getMoreData,
    placeholder,
  } = useCounters();
  useNotifications();
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
          <Link href={PageUrls.FOLLOW_REQUESTS} legacyBehavior>
            <a className={styles.followRequests}>
              {t("texts.followRequests")}({followRequestsCount})
            </a>
          </Link>
        )}

        <NotificationsList
          data={data}
          getMoreData={getMoreData}
          placeholder={placeholder}
        />
      </Card>
    </div>
  );
}
