import { PageUrls } from "@/@enums/pages";
import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import LinkButton from "@/components/LinkButton";
import { useAccountContext } from "@/context/AccountContext";
import { useProfile } from "../hooks/useProfile";
import styles from "../Profile.module.css";
import ConnectionButton from "./ConnectionStatus";
import Count from "./Count";

export default function Header({
  id,
  username,
  fullname,
  connectionStatus,
  isPrivate,
}: User) {
  const { user } = useAccountContext();
  const { counts } = useProfile();

  const clickable =
    id == user?.id ? true : isPrivate && connectionStatus !== 2 ? false : true;

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
      <div className="flex w-full text-tiny space-x-3 mt-3">
        {counts.map(count => (
          <Count key={count.title} {...count} clickable={clickable} />
        ))}
      </div>
    </div>
  );
}
