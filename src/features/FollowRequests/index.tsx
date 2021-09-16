import Wrapper from "@/components/Wrapper";
import UserInfo from "@/features/UserInfo";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";

export default function FollowRequests() {
  const { followRequests } = useFollowRequests();
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
