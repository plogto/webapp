import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { ContentStatus } from "@components/ContentStatus";
import { Loader } from "@components/Loader";
import { User } from "@components/User";
import styles from "./Users.module.css";
import type { UsersProps } from "./Users.types";

export function Users(props: UsersProps) {
  const {
    data,
    dataKey,
    scrollableTarget,
    className,
    pagination,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.users, className);

  return (
    <InfiniteScroll
      scrollableTarget={scrollableTarget}
      className={wrapperClasses}
      dataLength={data?.length || 0}
      next={getMoreData}
      hasMore={!!pagination?.nextPage}
      loader={
        <div className={styles.loadingWrapper}>
          <Loader className={styles.loading} />
        </div>
      }
    >
      {!data || data?.length < 1 ? (
        <ContentStatus
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        data?.map(item => (
          <User key={item[dataKey].id} user={item[dataKey]} showFollow />
        ))
      )}
    </InfiniteScroll>
  );
}
