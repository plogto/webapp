import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { Logo } from "@components/Logo";
import { Posts } from "@components/Posts";
import styles from "./Home.module.css";
import { useHome } from "./useHome";

export function Home() {
  const { loading, posts, pagination, emptyStatus, getMoreData } = useHome();

  return (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.home}>
      {isMobile && (
        <div className={styles.mobileHeader}>
          <Logo isClickable={false} />
        </div>
      )}
      <Posts
        scrollableTarget={ID.HOME_CARDS}
        isLoading={loading}
        pagination={pagination}
        getMoreData={getMoreData}
        posts={posts}
        emptyStatus={emptyStatus}
      />
    </Card>
  );
}
