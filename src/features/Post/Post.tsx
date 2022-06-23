import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { POST_TYPES } from "@constants";
import { Card } from "@components/Card";
import { PageHeader } from "@components/PageHeader";
import { Post } from "@components/Post";
import styles from "./Post.module.css";
import { usePost } from "./usePost";

export function PostContainer() {
  const { post } = usePost();
  const { t } = useTranslation("post");

  return post ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.post}>
      {isMobile && (
        <PageHeader
          title={post.parent ? t("texts.reply") : t("texts.post")}
          className={styles.mobileHeader}
        />
      )}
      <Post post={post} type={POST_TYPES.PAGE} />
    </Card>
  ) : (
    <></>
  );
}
