import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import styles from "../AddPost.module.css";

export default function Header({ username, fullname }: User) {
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