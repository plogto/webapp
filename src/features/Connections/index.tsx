import styles from "./Connections.module.css";
import { useConnections } from "./hooks/useConnections";
import { Card } from "@components/Card";
import { UserInfo } from "@features/UserInfo";
import type { ConnectionsProps } from "./@types";

export function Connections({ type }: ConnectionsProps) {
  const { connections } = useConnections({ type });

  return (
    <Card className={styles.card}>
      {connections[type]?.connections?.map(connection => (
        <UserInfo
          key={connection.id}
          user={
            type == "following" ? connection.following : connection.follower
          }
          showFollow
        />
      ))}
    </Card>
  );
}
