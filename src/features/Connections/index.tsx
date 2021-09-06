import UserInfo from "@/features/UserInfo";
import { useConnections } from "./hooks/useConnections";
import styles from "./FollowRequests.module.css";
import { ConnectionsProps } from "./@types";

export default function FollowRequests({ type }: ConnectionsProps) {
  const { connections } = useConnections({ type });

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {connections[type].connections?.map(connection => (
          <UserInfo
            key={connection.id}
            user={
              type == "following" ? connection.following : connection.follower
            }
            showFollow
          />
        ))}
      </div>
    </div>
  );
}
