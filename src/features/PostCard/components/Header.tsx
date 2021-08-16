import { User } from "@/@types/user";
import { UserCircleIcon } from "@heroicons/react/solid";
import styles from "../PostCard.module.css";

export default function Header({ username, fullname }: User) {
  return (
    <div className={styles.header}>
      <UserCircleIcon className={styles.avatar} />
      <div>
        <div className={styles.fullname}>{fullname}</div>
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
