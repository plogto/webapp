import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { PostsList } from "@components/Lists/PostsList";
import styles from "../Search.module.css";
import { usePosts } from "../hooks";

export function Posts() {
  const { isLoading, posts, emptyStatus, getMoreData } = usePosts();

  return (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.posts}>
      <PostsList
        isLoading={isLoading}
        getMoreData={getMoreData}
        data={posts}
        emptyStatus={emptyStatus}
      />
    </Card>
  );
}
