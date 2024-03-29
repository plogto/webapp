import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { PostsList } from "@components/Lists/PostsList";
import { Logo } from "@components/Logo";
import styles from "./Home.module.css";
import { useHome } from "./useHome";

export function Home() {
  const { isLoading, posts, placeholder, getMoreData } = useHome();

  return (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.home}>
      {isMobile && (
        <div className={styles.mobileHeader}>
          <Logo isClickable={false} />
        </div>
      )}
      <PostsList
        isLoading={isLoading}
        getMoreData={getMoreData}
        data={posts}
        placeholder={placeholder}
      />
    </Card>
  );
}
