import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { UsersList } from "@components/Lists/UsersList";
import { Placeholder } from "@components/Placeholder";
import { Tabs } from "@components/Tabs/Tabs";
import { useAccountContext } from "@contexts/AccountContext";
import styles from "../Connections.module.css";
import type { ConnectionsContentProps } from "../Connections.types";

export function ConnectionsContent(props: ConnectionsContentProps) {
  const { user, tabs } = props;
  const { user: userAccount } = useAccountContext();
  const { t } = useTranslation("profile");

  const isConnections =
    (tabs[0]?.data?.data?.edges && tabs[0]?.data?.data?.edges?.length > 0) ||
    (tabs[1]?.data?.data?.edges && tabs[1]?.data?.data?.edges?.length > 0);

  const isPrivate = user?.isPrivate;
  const isYourProfile = user?.id === userAccount?.id;

  const { asPath } = useRouter();

  return (
    <Card
      className={styles.profileContent}
      shadow={!isMobile}
      rounded={!isMobile}
    >
      <Tabs tabs={tabs} />
      <div>
        {!isConnections && !isYourProfile && isPrivate ? (
          <Placeholder
            title={t("status.private.title")}
            description={t("status.private.description")}
            icon="LockClosed"
            className={styles.privateStatus}
          />
        ) : (
          tabs.map(
            ({
              dataKey,
              href,
              data: { data, isLoading },
              getMoreData,
              emptyStatus,
            }) =>
              asPath === href && (
                <UsersList
                  key={JSON.stringify(data?.pageInfo.endCursor)}
                  data={data}
                  dataKey={dataKey}
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
