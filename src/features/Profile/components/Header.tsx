import { PageUrls } from "@/@enums/pages";
import type { User } from "@/@types/user";
import { Avatar } from "@/components/Avatar";
import { LinkButton } from "@/components/LinkButton";
import { useAccountContext } from "@/context/AccountContext";
import { useTranslation } from "react-i18next";
import { useProfile } from "../hooks";
import styles from "../Profile.module.css";
import { Count, ConnectionStatus } from ".";

export function Header({
  id,
  username,
  fullname,
  connectionStatus,
  isPrivate,
}: User) {
  const { user } = useAccountContext();
  const { counts } = useProfile();
  const { t } = useTranslation("profile");

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
      </div>
      <div className="w-full flex items-end justify-between">
        <div className="flex w-full text-tiny space-x-3">
          {counts.map(count => (
            <Count key={count.title} {...count} clickable={clickable} />
          ))}
        </div>
        {user?.id !== id ? (
          <ConnectionStatus connectionStatus={connectionStatus} />
        ) : (
          <LinkButton href={PageUrls.SETTINGS} className={styles.settings}>
            {t("buttons.settings")}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
