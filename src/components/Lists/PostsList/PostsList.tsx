import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { POST_TYPES } from "@constants";
import { Loader } from "@components/Loader";
import { Placeholder } from "@components/Placeholder";
import { Post } from "@components/Post";
import styles from "./PostsList.module.css";
import type { PostsListProps } from "./PostsList.types";

export function PostsList(props: PostsListProps) {
  const {
    isLoading,
    posts,
    scrollableTarget,
    className,
    getMoreData,
    emptyStatus: { title, description, icon },
  } = props;
  const wrapperClasses = classNames(styles.posts, className);

  return (
    <InfiniteScroll
      scrollableTarget={scrollableTarget}
      className={wrapperClasses}
      dataLength={posts?.totalCount || 0}
      next={getMoreData}
      hasMore={!!posts?.pageInfo?.hasNextPage}
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
      ) : !posts?.edges || posts?.edges?.length < 1 ? (
        <Placeholder
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        posts?.edges?.map(({ node }) => (
          <Post
            key={node.id}
            post={node}
            className={styles.post}
            type={POST_TYPES.CARD}
          />
        ))
      )}
    </InfiniteScroll>
  );
}
