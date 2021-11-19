import styles from "../AddPost.module.css";
import { Avatar } from "@components/Avatar";
import type { User } from "@t/user";

export function Header({ username, fullName }: User) {
  return (
    <div className={styles.header}>
      <Avatar className={styles.avatar} />
      <div>
        <div className={styles.fullName}>{fullName}</div>
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
