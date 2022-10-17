import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { POST_TYPES } from "@constants";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { PageLoader } from "@components/PageLoader";
import { Post } from "@components/Post";
import { usePost } from "@hooks/usePost";
import styles from "./Post.module.css";

export function PostContainer() {
  const { post, isLoading } = usePost();
  const { t } = useTranslation("post");

  if (isLoading) {
    return <PageLoader />;
  }

  if (post) {
    return (
      <Card shadow={!isMobile} rounded={!isMobile} className={styles.post}>
        {isMobile && (
          <PageHeader
            title={post.parent ? t("texts.reply") : t("texts.post")}
            className={styles.mobileHeader}
          />
        )}
        <Post post={post} type={POST_TYPES.PAGE} />
      </Card>
    );
  }
  return null;
}
