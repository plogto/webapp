import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import styles from "./UserInfo.module.css";

export default function UserInfo({ username, fullname }: User) {
  return (
    <div className={styles.container}>
      <Avatar className={styles.avatar} />
      <div>
        <div className={styles.fullname}>{fullname}</div>
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
