import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { PageLoaderHeightType } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Notification } from "@components/Notification";
import { PageLoader } from "@components/PageLoader";
import { Placeholder } from "@components/Placeholder";
import styles from "./NotificationsList.module.css";
import type { NotificationsListProps } from "./NotificationsList.types";

export function NotificationsList(props: NotificationsListProps) {
  const {
    isLoading,
    data,
    className,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.notificationsList, className);
  const { t } = useTranslation("notifications");

  // TODO: move it to hook
  const [showMoreLoading, setIsShowMoreLoading] = useState(false);

  const handleShowMoreButton = () => {
    setIsShowMoreLoading(true);
    getMoreData();
  };

  useEffect(() => {
    setIsShowMoreLoading(false);
  }, [data?.edges]);

  const loader = <PageLoader heightType={PageLoaderHeightType.NORMAL} />;

  return (
    <div className={wrapperClasses}>
      {isLoading ? (
        loader
      ) : !data?.edges || data?.edges?.length < 1 ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        data.edges?.map(({ node }) => (
          <Notification key={node.id} notification={node} />
        ))
      )}
      {data?.pageInfo.hasNextPage &&
        (showMoreLoading ? (
          loader
        ) : (
          <div className={styles.showMore}>
            <Button onClick={handleShowMoreButton}>
              {t("buttons.showMore")}
            </Button>
          </div>
        ))}
    </div>
  );
}
