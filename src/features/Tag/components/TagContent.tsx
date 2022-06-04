import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { ContentStatus } from "@components/ContentStatus";
import { Posts } from "@components/Posts";
import styles from "../Tag.module.css";
import type { TagContentProps } from "../Tag.types";

export function TagContent(props: TagContentProps) {
  const { tabs } = props;
  const { t } = useTranslation("profile");

  const isPosts = tabs[0]?.data?.data && tabs[0]?.data?.data?.length > 0;

  const { asPath } = useRouter();

  return (
    <Card className={styles.tagContent} shadow={!isMobile} rounded={!isMobile}>
      <div>
        {!isPosts ? (
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
