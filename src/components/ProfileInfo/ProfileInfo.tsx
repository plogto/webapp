import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLayout } from "@enums";
import { Avatar } from "@components/Avatar";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { FullName } from "@components/FullName";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { formatCountTitle } from "@utils/formatter";
import styles from "./ProfileInfo.module.css";
import type { ProfileInfoProps } from "./ProfileInfo.types";
import { ConnectionStatus, Count } from "./components";
import { useProfileInfo } from "./hooks/useProfileInfo";

export function ProfileInfo(props: ProfileInfoProps) {
  const {
    user,
    user: {
      id,
      username,
      avatar,
      fullName,
      bio,
      connectionStatus,
      isPrivate,
      isVerified,
      credits,
    },
    showCredit = true,
  } = props;
  const { isYourAccount } = useAccountContext();
  const { COUNTS } = useProfileInfo({ user });
  const { t } = useTranslation("profile");

  const clickable = isYourAccount(username)
    ? true
    : isPrivate && connectionStatus !== 2
    ? false
    : true;

  return (
    <Card className={styles.profileInfo} shadow={!isMobile} rounded={!isMobile}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Avatar size="large" avatar={avatar} alt={fullName} />
        </div>
        <div className={styles.buttonWrapper}>
          {!isYourAccount(username) ? (
            <ConnectionStatus user={{ id, connectionStatus }} />
          ) : (
            <>
              {showCredit && (
                <Link href={PageUrls.CREDITS}>
                  <a className={styles.credits}>
                    <Image
                      src="/static/images/credit.png"
                      width={18}
                      height={18}
                      alt="credit"
                    />
                    <span>
                      {credits
                        ? formatCountTitle({
                            singular: t("buttons.credit"),
                            plural: t("buttons.credits"),
                            count: credits,
                          }).text
                        : t("buttons.credits")}
                    </span>
                  </a>
                </Link>
              )}
              <LinkButton
                layout={ButtonLayout.FILL}
                href={isMobile ? PageUrls.SETTINGS : PageUrls.EDIT_PROFILE}
                className={styles.settings}
              >
                {t("buttons.settings")}
              </LinkButton>
            </>
          )}
        </div>
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

      <div className={styles.counts}>
        {COUNTS.map((count, i) => (
          <>
            {i > 0 && <div className={styles.countSeparator} />}
            <Count key={count.title} {...count} clickable={clickable} />
          </>
        ))}
      </div>
    </Card>
  );
}
