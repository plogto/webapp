import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import { TicketMessage } from "@components/TicketMessage";
import styles from "./TicketMessagesList.module.css";
import type { TicketMessagesListProps } from "./TicketMessagesList.types";

export function TicketMessagesList(props: TicketMessagesListProps) {
  const {
    isLoading,
    ticketMessages,
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
      dataLength={ticketMessages?.totalCount || 0}
      next={getMoreData}
      hasMore={!!ticketMessages?.pageInfo?.hasNextPage}
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
      ) : !ticketMessages?.edges || ticketMessages?.edges?.length < 1 ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        ticketMessages.edges?.map(({ node }) => (
          <TicketMessage key={node.id} ticketMessage={node} />
        ))
      )}
    </InfiniteScroll>
  );
}
