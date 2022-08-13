import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { ContentStatus } from "@components/ContentStatus";
import { Loader } from "@components/Loader";
import { Notification } from "@components/Notification";
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
  const [isShowMoreLoading, setIsShowMoreLoading] = useState(false);

  const handleShowMoreButton = () => {
    setIsShowMoreLoading(true);
    getMoreData();
  };

  useEffect(() => {
    setIsShowMoreLoading(false);
  }, [data?.edges]);

  const loader = (
    <div className={styles.loadingWrapper}>
      <span className="relative">
        <Loader className={styles.loading} />
      </span>
    </div>
  );

  return (
    <div className={wrapperClasses}>
      {isLoading ? (
        loader
      ) : !data?.edges || data?.edges?.length < 1 ? (
        <ContentStatus
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
        (isShowMoreLoading ? (
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
