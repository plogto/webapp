import { useTranslation } from "react-i18next";
import { ConnectionStatus, Count } from "..";
import styles from "../../Profile.module.css";
import { useProfile } from "../../hooks";
import { Avatar } from "@components/Avatar";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { Img } from "@components/Img";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { User } from "@t/user";

// TODO: refactor this component
export function Header(props: User) {
  const {
    id,
    username,
    avatar,
    background,
    fullName,
    bio,
    connectionStatus,
    isPrivate,
  } = props;
  const { user } = useAccountContext();
  const { counts } = useProfile();
  const { t } = useTranslation("profile");

  const clickable =
    id == user?.id ? true : isPrivate && connectionStatus !== 2 ? false : true;

  return (
    <Card className={styles.header}>
      <div className={styles.background}>
        {background && <Img image={background} />}
        <Avatar size="large" className={styles.avatar} avatar={avatar} />
      </div>
      <div className="flex items-start justify-between w-full pl-3">
        <div>
          <div className={styles.fullName}>{fullName}</div>
          <div className={styles.username}>@{username}</div>
        </div>
      </div>

      <div className="w-full pl-3">
        <p className={styles.bio}>{bio}</p>
      </div>
      <div className="w-full flex items-end justify-between px-3">
        <div className="flex w-full text-tiny space-x-3">
          {counts.map(count => (
            <Count key={count.title} {...count} clickable={clickable} />
          ))}
        </div>
        {user?.id !== id ? (
          <ConnectionStatus user={{ id, connectionStatus }} />
        ) : (
          <LinkButton
            layout="apply"
            href={PageUrls.SETTINGS}
            className={styles.settings}
          >
            {t("buttons.settings")}
          </LinkButton>
        )}
      </div>
    </Card>
  );
}
