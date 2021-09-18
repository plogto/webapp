import type { User } from "@t/user";
import { Avatar } from "@components/Avatar";
import styles from "../PostCard.module.css";

export function Header({ username, fullname }: User) {
  return (
    <div className={styles.header}>
      <Avatar className={styles.avatar} />
      <div>
        <div className={styles.fullname}>{fullname}</div>
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
