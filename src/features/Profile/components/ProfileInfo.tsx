import { useTranslation } from "react-i18next";
import { ConnectionStatus, Count } from ".";
import { Avatar } from "@components/Avatar";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { FullName } from "@components/FullName";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import styles from "../Profile.module.css";
import type { ProfileInfoProps } from "../Profile.types";
import { useProfile } from "../hooks";

export function ProfileInfo(props: ProfileInfoProps) {
  const {
    user: {
      id,
      username,
      avatar,
      fullName,
      bio,
      connectionStatus,
      isPrivate,
      isVerified,
    },
  } = props;
  const { user } = useAccountContext();
  const { COUNTS } = useProfile();
  const { t } = useTranslation("profile");

  const clickable =
    id == user?.id ? true : isPrivate && connectionStatus !== 2 ? false : true;

  return (
    <Card className={styles.profileInfo}>
      <div className={styles.avatar}>
        <Avatar size="large" avatar={avatar} />
      </div>

      <div className={styles.names}>
        <FullName
          className={styles.fullName}
          fullName={fullName}
          isVerified={isVerified}
          type="complete"
          size="large"
        />
        <div className={styles.username}>@{username}</div>
      </div>
      {bio && (
        <div className="w-full">
          <p className={styles.bio}>{bio}</p>
        </div>
      )}
      <div className={styles.buttonWrapper}>
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
      <div className={styles.counts}>
        {COUNTS.map(count => (
          <Count key={count.title} {...count} clickable={clickable} />
        ))}
      </div>
    </Card>
  );
}
