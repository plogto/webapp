import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { POST_TYPES } from "@constants";
import { ContentStatus } from "@components/ContentStatus";
import { Loader } from "@components/Loader";
import { Post } from "@components/Post";
import styles from "./Posts.module.css";
import type { PostsProps } from "./Posts.types";

export function Posts(props: PostsProps) {
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
        <ContentStatus
          title={title}
          description={description}
          icon={icon}
          className={styles.emptyStatus}
        />
      ) : (
        posts.edges?.map(({ node }) => (
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
