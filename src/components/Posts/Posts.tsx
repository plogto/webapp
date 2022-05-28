import InfiniteScroll from "react-infinite-scroll-component";
import classNames from "classnames";
import { POST_TYPES } from "@constants";
import { Loader } from "@components/Loader";
import { Post } from "@components/Post";
import styles from "./Posts.module.css";
import type { PostsProps } from "./Posts.types";

export function Posts(props: PostsProps) {
  const { posts, className, pagination, getMoreData } = props;
  const wrapperClasses = classNames(styles.posts, className);

  return (
    <InfiniteScroll
      dataLength={posts?.length || 0}
      next={getMoreData}
      hasMore={!!pagination?.nextPage}
      loader={
        <div className={styles.loadingWrapper}>
          <Loader className={styles.loading} />
        </div>
      }
      className={wrapperClasses}
    >
      {posts?.map(post => (
        <Post
          key={post.id}
          post={post}
          className={styles.post}
          type={POST_TYPES.CARD}
        />
      ))}
    </InfiniteScroll>
  );
}
