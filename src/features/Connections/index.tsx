import UserInfo from "@/features/UserInfo";
import { useConnections } from "./hooks/useConnections";
import styles from "./FollowRequests.module.css";
import { ConnectionsProps } from "./@types";
import Wrapper from "@/components/Wrapper";

export default function FollowRequests({ type }: ConnectionsProps) {
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
