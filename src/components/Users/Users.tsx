import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import { User } from "@components/User";
import styles from "./Users.module.css";
import type { UsersProps } from "./Users.types";

export function Users(props: UsersProps) {
  const {
    data,
    dataKey,
    scrollableTarget,
    className,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.users, className);

  return (
    <InfiniteScroll
      scrollableTarget={scrollableTarget}
      className={wrapperClasses}
      dataLength={data?.totalCount || 0}
      next={getMoreData}
      hasMore={!!data?.pageInfo.hasNextPage}
      loader={
        <div className={styles.loadingWrapper}>
          <Loader className={styles.loading} />
        </div>
      }
    >
      {!data?.edges || data?.edges.length < 1 ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        data?.edges.map(({ node }) => (
          <User key={node[dataKey].id} user={node[dataKey]} showFollow />
        ))
      )}
    </InfiniteScroll>
  );
}
