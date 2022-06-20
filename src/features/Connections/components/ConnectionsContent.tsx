import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { ContentStatus } from "@components/ContentStatus";
import { Users } from "@components/Users";
import { useAccountContext } from "@contexts/AccountContext";
import { useClassName } from "@hooks/useClassName";
import styles from "../Connections.module.css";
import type { ConnectionsContentProps } from "../Connections.types";

export function ConnectionsContent(props: ConnectionsContentProps) {
  const { user, tabs } = props;
  const { user: userAccount } = useAccountContext();
  const { t } = useTranslation("profile");

  const isConnections =
    (tabs[0]?.data?.data && tabs[0]?.data?.data?.length > 0) ||
    (tabs[1]?.data?.data && tabs[1]?.data?.data?.length > 0);

  const isPrivate = user?.isPrivate;
  const isYourProfile = user?.id === userAccount?.id;

  const { activeClass } = useClassName();
  const { asPath } = useRouter();

  return (
    <Card
      className={styles.profileContent}
      shadow={!isMobile}
      rounded={!isMobile}
    >
      <div className={styles.tabs}>
        {tabs.map(({ title, href }) => (
          <Link key={title} href={href}>
            <a
              className={classNames(
                styles.tab,
                activeClass({ href, className: "font-bold" }),
              )}
            >
              {title}
            </a>
          </Link>
        ))}
      </div>
      <div>
        {!isConnections && !isYourProfile && isPrivate ? (
          <ContentStatus
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
              data: { data, isLoading, pagination },
              getMoreData,
              emptyStatus,
            }) =>
              asPath === href && (
                <Users
                  key={JSON.stringify(pagination)}
                  data={data}
                  dataKey={dataKey}
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
