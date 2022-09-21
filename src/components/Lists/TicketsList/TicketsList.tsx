import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import { Ticket } from "@components/Ticket";
import styles from "./TicketsList.module.css";
import type { TicketsListProps } from "./TicketsList.types";

export function TicketsList(props: TicketsListProps) {
  const {
    isLoading,
    tickets,
    scrollableTarget,
    className,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.listWrapper, className);

  return (
    <InfiniteScroll
      scrollableTarget={scrollableTarget}
      className={wrapperClasses}
      dataLength={tickets?.totalCount || 0}
      next={getMoreData}
      hasMore={!!tickets?.pageInfo?.hasNextPage}
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
      ) : !tickets?.edges || tickets?.edges?.length < 1 ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        tickets.edges?.map(({ node }) => <Ticket key={node.id} ticket={node} />)
      )}
    </InfiniteScroll>
  );
}
