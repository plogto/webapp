import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { Posts } from "@components/Posts";
import styles from "./Home.module.css";
import { useHome } from "./useHome";

export function Home() {
  const { isLoading, posts, pagination, emptyStatus, getMoreData } = useHome();

  return (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.home}>
      <Posts
        scrollableTarget={ID.HOME_CARDS}
        isLoading={isLoading}
        pagination={pagination}
        getMoreData={getMoreData}
        posts={posts}
        emptyStatus={emptyStatus}
      />
    </Card>
  );
}
