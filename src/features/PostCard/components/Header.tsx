import Link from "next/link";
import styles from "../PostCard.module.css";
import { Avatar } from "@components/Avatar";
import type { User } from "@t/user";

export function Header({ username, fullname }: User) {
  return (
    <Link href={`/${username}`}>
      <a className={styles.header}>
        <Avatar className={styles.avatar} />
        <div>
          <div className={styles.fullname}>{fullname}</div>
          <div className={styles.username}>@{username}</div>
        </div>
      </a>
    </Link>
  );
}
