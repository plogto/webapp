import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Avatar } from "@components/Avatar";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { FullName } from "@components/FullName";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import styles from "./ProfileInfo.module.css";
import type { ProfileInfoProps } from "./ProfileInfo.types";
import { ConnectionStatus, Count } from "./components";
import { useProfileInfo } from "./hooks/useProfileInfo";

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
  const { COUNTS } = useProfileInfo();
  const { t } = useTranslation("profile");

  const clickable =
    id == user?.id ? true : isPrivate && connectionStatus !== 2 ? false : true;

  return (
    <Card className={styles.profileInfo} shadow={!isMobile} rounded={!isMobile}>
      <div className={styles.avatar}>
        <Avatar size="large" avatar={avatar} alt={fullName} />
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
