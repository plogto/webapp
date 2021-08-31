import { PageUrls } from "@/@enums/pages";
import UserInfo from "@/features/UserInfo";
import Link from "next/link";
import styles from "./FollowRequests.module.css";
import { useFollowRequests } from "./hooks/useFollowRequests";

export default function FollowRequests() {
  const { followRequests } = useFollowRequests();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {followRequests?.map(followRequest => (
          <UserInfo user={followRequest.follower} showAccept showDelete />
        ))}
      </div>
    </div>
  );
}