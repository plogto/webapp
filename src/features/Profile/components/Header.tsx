import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import { useAccount } from "@/context/AccountContext";
import styles from "../Profile.module.css";
import ConnectionButton from "./ConnectionButton";

export default function Header({
  id,
  username,
  fullname,
  connectionStatus,
}: User) {
  const { user } = useAccount();
  return (
    <div className={styles.header}>
      <Avatar className={styles.avatar} />
      <div className="flex items-start justify-between w-full">
        <div>
          <div className={styles.fullname}>{fullname}</div>
          <div className={styles.username}>@{username}</div>
        </div>
        {user?.id !== id && (
          <ConnectionButton connectionStatus={connectionStatus} />
        )}
      </div>
    </div>
  );
}
