import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";
import { UserInfo } from "@features/UserInfo";

export function FollowRequests() {
  const { followRequests } = useFollowRequests();
  return (
    <div className={styles.card}>
      {followRequests?.map(followRequest => (
        <UserInfo
          key={followRequest.id}
          user={followRequest.follower}
          showAccept
          showDelete
        />
      ))}
    </div>
  );
}
