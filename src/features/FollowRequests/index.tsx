import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";
import { Card } from "@components/Card";
import { User } from "@components/User";

export function FollowRequests() {
  const { followRequests } = useFollowRequests();
  return (
    <Card className={styles.card}>
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
