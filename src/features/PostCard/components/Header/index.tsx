import Link from "next/link";
import styles from "../../PostCard.module.css";
import { Avatar } from "@components/Avatar";
import { useNavigation } from "@hooks/useNavigation";
import type { User } from "@t/user";

export function Header({ username, fullName }: User) {
  const { formatProfilePageRoute } = useNavigation();
  return (
    <Link href={formatProfilePageRoute(username)}>
      <a className={styles.header}>
        <Avatar className={styles.avatar} />
        <div>
          <div className={styles.fullName}>{fullName}</div>
          <div className={styles.username}>@{username}</div>
        </div>
      </a>
    </Link>
  );
}
