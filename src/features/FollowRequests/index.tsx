import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { User } from "@components/User";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";

export function FollowRequests() {
  const { followRequests } = useFollowRequests();
  const { t } = useTranslation("notifications");
  return (
    <Card className={styles.card}>
      <PageHeader title={t("texts.followRequests")} />
      {followRequests?.map(followRequest => (
        <User
          key={followRequest.id}
          user={followRequest.follower}
          showAccept
          showDelete
        />
      ))}
    </Card>
  );
}
