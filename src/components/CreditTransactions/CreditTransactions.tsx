import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { CreditTransaction } from "@components/CreditTransaction";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import styles from "./CreditTransactions.module.css";
import type { CreditTransactionsProps } from "./CreditTransactions.types";

export function CreditTransactions(props: CreditTransactionsProps) {
  const {
    data,
    scrollableTarget,
    className,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.creditTransaction, className);

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
          <CreditTransaction key={node.id} creditTransaction={node} />
        ))
      )}
    </InfiniteScroll>
  );
}
