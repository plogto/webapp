import { PageUrls } from "@/@enums/pages";
import UserInfo from "@/features/UserInfo";
import Link from "next/link";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";

export default function FollowRequests() {
  const { followRequests } = useFollowRequests();
  return (
    <div className={styles.wrapper}>
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
    </div>
  );
}
