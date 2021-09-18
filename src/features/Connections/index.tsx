import { UserInfo } from "@features/UserInfo";
import { useConnections } from "./hooks/useConnections";
import styles from "./Connections.module.css";
import type { ConnectionsProps } from "./@types";
import { Wrapper } from "@components/Wrapper";

export function Connections({ type }: ConnectionsProps) {
  const { connections } = useConnections({ type });

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
