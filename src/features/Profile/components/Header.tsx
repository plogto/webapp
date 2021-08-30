import { PageUrls } from "@/@enums/pages";
import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import LinkButton from "@/components/LinkButton";
import { useAccount } from "@/context/AccountContext";
import styles from "../Profile.module.css";
import ConnectionButton from "./ConnectionStatus";

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
        {user?.id !== id ? (
          <ConnectionButton connectionStatus={connectionStatus} />
        ) : (
          <LinkButton href={PageUrls.SETTINGS} className={styles.settings}>
            Settings
          </LinkButton>
        )}
      </div>
    </div>
  );
}
