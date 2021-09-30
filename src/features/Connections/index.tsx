import styles from "./Connections.module.css";
import { useConnections } from "./hooks/useConnections";
import { UserInfo } from "@features/UserInfo";
import type { ConnectionsProps } from "./@types";

export function Connections({ type }: ConnectionsProps) {
  const { connections } = useConnections({ type });

  return (
    <div className={styles.card}>
      {connections[type]?.connections?.map(connection => (
        <UserInfo
          key={connection.id}
          user={
            type == "following" ? connection.following : connection.follower
          }
          showFollow
        />
      ))}
    </div>
  );
}
