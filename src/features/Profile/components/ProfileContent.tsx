import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { ContentStatus } from "@components/ContentStatus";
import { Posts } from "@components/Posts";
import { Tabs } from "@components/Tabs";
import { useAccountContext } from "@contexts/AccountContext";
import styles from "../Profile.module.css";
import type { ProfileContentProps } from "../Profile.types";

export function ProfileContent(props: ProfileContentProps) {
  const { user, tabs } = props;
  const { user: userAccount } = useAccountContext();
  const { t } = useTranslation("profile");

  const isPosts = tabs[0]?.data?.data && tabs[0]?.data?.data?.length > 0;
  const isPrivate = user?.isPrivate;
  const isYourProfile = user?.id == userAccount?.id;

  const { asPath } = useRouter();

  return (
    <Card
      className={styles.profileContent}
      shadow={!isMobile}
      rounded={!isMobile}
    >
      <Tabs tabs={tabs} />
      <div>
        {!isPosts && !isYourProfile && isPrivate ? (
          <ContentStatus
            title={t("status.private.title")}
            description={t("status.private.description")}
            icon="LockClosed"
            className={styles.privateStatus}
          />
        ) : (
          tabs.map(
            ({
              href,
              data: { data, isLoading, pagination },
              getMoreData,
              emptyStatus,
            }) =>
              asPath === href && (
                <Posts
                  key={JSON.stringify(pagination)}
                  posts={data}
                  pagination={pagination}
                  isLoading={isLoading}
                  getMoreData={getMoreData}
                  emptyStatus={emptyStatus}
                  scrollableTarget={ID.PROFILE_CARDS}
                />
              ),
          )
        )}
      </div>
    </Card>
  );
}