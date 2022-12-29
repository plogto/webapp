import { POST_TYPES } from "@constants";
import { Post } from "@components/Post";
import { ListWrapper } from "../ListWrapper";
import styles from "./PostsList.module.css";
import type { PostsListProps } from "./PostsList.types";
import isEmpty from "lodash/isEmpty";

export function PostsList(props: PostsListProps) {
  const { isLoading, data, scrollableTarget, getMoreData, placeholder } = props;

  return (
    <ListWrapper
      data={data}
      isEdgesExists={!isEmpty(data?.edges)}
      isLoading={isLoading}
      placeholder={placeholder}
      scrollableTarget={scrollableTarget}
      getMoreData={getMoreData}
    >
      {data?.edges?.map(({ node }) => (
        <Post
          key={node.id}
          post={node}
          className={styles.post}
          type={POST_TYPES.CARD}
        />
      ))}
    </ListWrapper>
  );
}
