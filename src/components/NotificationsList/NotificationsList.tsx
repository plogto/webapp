import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { ContentStatus } from "@components/ContentStatus";
import { Loader } from "@components/Loader";
import { Notification } from "@components/Notification";
import styles from "./NotificationsList.module.css";
import type { NotificationsListProps } from "./NotificationsList.types";

export function NotificationsList(props: NotificationsListProps) {
  const {
    isLoading,
    notifications,
    scrollableTarget,
    className,
    pagination,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.notificationsList, className);

  return (
    <InfiniteScroll
      scrollableTarget={scrollableTarget}
      className={wrapperClasses}
      dataLength={notifications?.length || 0}
      next={getMoreData}
      hasMore={!!pagination?.nextPage}
      loader={
        <div className={styles.loadingWrapper}>
          <Loader className={styles.loading} />
        </div>
      }
    >
      {isLoading ? (
        <div className={styles.loadingWrapper}>
          <span className="relative">
            <Loader className={styles.loading} />
          </span>
        </div>
      ) : !notifications || notifications?.length < 1 ? (
        <ContentStatus
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        notifications?.map(notification => (
          <Notification key={notification.id} notification={notification} />
        ))
      )}
    </InfiniteScroll>
  );
}
