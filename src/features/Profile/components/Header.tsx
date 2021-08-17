import { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import { CogIcon, UserCircleIcon } from "@heroicons/react/solid";
import styles from "../Profile.module.css";

export default function Header({ username, fullname }: User) {
  return (
    <div className={styles.header}>
      <Avatar className="w-24 h-24 lg:w-32 lg:h-32 text-gray-400 rounded-full shadow-sm border" />
      <div className="ml-5 lg:ml-10">
        <div className={styles.fullname}>{fullname}</div>
        <div className={styles.username}>@{username}</div>
      </div>
    </div>
  );
}
