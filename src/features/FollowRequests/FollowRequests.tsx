import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { Placeholder } from "@components/Placeholder";
import { User } from "@components/User";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./useFollowRequests";
import isEmpty from "lodash/isEmpty";

export function FollowRequests() {
  const { followRequests, isLoading, placeholder } = useFollowRequests();
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
        isLoading={isLoading}
      >
        {isEmpty(followRequests?.edges) ? (
          <Placeholder {...placeholder} className={styles.placeholder} />
        ) : (
          followRequests?.edges?.map(({ node }) => (
            <User key={node.id} user={node.follower} showAccept showDelete />
          ))
        )}
      </Card>
    </div>
  );
}
