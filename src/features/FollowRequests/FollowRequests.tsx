import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { User } from "@components/User";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./useFollowRequests";

export function FollowRequests() {
  const { followRequests } = useFollowRequests();
  const { t } = useTranslation("notifications");

  return (
    <div className={styles.wrapper}>
      {isMobile ? (
        <PageHeader
          title={t("texts.followRequests")}
          className={styles.mobileHeader}
        />
      ) : (
        <div className={styles.header}>
          <span className={styles.title}>{t("texts.followRequests")}</span>
        </div>
      )}
      <Card
        className={styles.followRequests}
        shadow={!isMobile}
        rounded={!isMobile}
      >
        {followRequests?.map(followRequest => (
          <User
            key={followRequest.id}
            user={followRequest.follower}
            showAccept
            showDelete
          />
        ))}
      </Card>
    </div>
  );
}
