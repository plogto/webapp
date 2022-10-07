import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { PostsList } from "@components/Lists/PostsList";
import { Placeholder } from "@components/Placeholder";
import { Tabs } from "@components/Tabs";
import { useAccountContext } from "@contexts/AccountContext";
import styles from "../Profile.module.css";
import type { ProfileContentProps } from "../Profile.types";

export function ProfileContent(props: ProfileContentProps) {
  const { user, tabs } = props;
  const { user: userAccount } = useAccountContext();
  const { t } = useTranslation("profile");

  const isPosts =
    tabs[0]?.data?.data?.edges && tabs[0]?.data?.data.edges?.length > 0;
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
          <Placeholder
            title={t("status.private.title")}
            description={t("status.private.description")}
            icon="LockClosed"
            className={styles.privateStatus}
          />
        ) : (
          tabs.map(
            ({ href, data: { data, isLoading }, getMoreData, emptyStatus }) =>
              asPath === href && (
                <PostsList
                  key={JSON.stringify(data?.pageInfo.endCursor)}
                  data={data}
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
