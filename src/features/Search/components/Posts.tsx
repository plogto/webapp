import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { PostsList } from "@components/Lists/PostsList";
import styles from "../Search.module.css";
import { usePosts } from "../hooks";

export function Posts() {
  const { loading, posts, emptyStatus, getMoreData } = usePosts();

  return (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.posts}>
      <PostsList
        isLoading={loading}
        getMoreData={getMoreData}
        posts={posts}
        emptyStatus={emptyStatus}
      />
    </Card>
  );
}
