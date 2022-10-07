import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { PageLoaderHeightType } from "@enums";
import { Loader } from "@components/Loader";
import { PageLoader } from "@components/PageLoader";
import { Placeholder } from "@components/Placeholder";
import styles from "./ListWrapper.module.css";
import type { ListWrapperProps } from "./ListWrapper.types";

export function ListWrapper(props: ListWrapperProps) {
  const {
    data,
    isEdgesExists,
    children,
    scrollableTarget,
    className,
    getMoreData,
    isLoading,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.wrapper, className);

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
      {isLoading ? (
        <PageLoader heightType={PageLoaderHeightType.NORMAL} />
      ) : !isEdgesExists ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        children
      )}
    </InfiniteScroll>
  );
}
