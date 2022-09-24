import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import { TicketPreview } from "@components/TicketPreview";
import styles from "./TicketPreviewsList.module.css";
import type { TicketPreviewsListProps } from "./TicketPreviewsList.types";

export function TicketPreviewsList(props: TicketPreviewsListProps) {
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
        tickets.edges?.map(({ node }) => (
          <TicketPreview key={node.id} ticket={node} />
        ))
      )}
    </InfiniteScroll>
  );
}
