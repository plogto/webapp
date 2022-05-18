import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { PageStatus } from "@components/PageStatus";
import { Posts } from "@components/Posts";
import styles from "./Saved.module.css";
import { useSaved } from "./useSaved";

export function Saved() {
  const { savedPosts } = useSaved();
  const { t } = useTranslation("saved");
  return (
    <>
      <Card className={styles.card}>
        <PageHeader
          className={classNames(savedPosts?.length && "border-none")}
          title={t("texts.savedPosts")}
        />
        {!savedPosts?.length && (
          <PageStatus
            title={t("status.noPosts.title")}
            description={t("status.noPosts.description")}
            icon={<Icon name="Bookmark" className="w-12" />}
            className={styles.noPostsStatus}
          />
        )}
      </Card>
      {savedPosts?.length > 0 && (
        <Posts className="h-full overflow-y-scroll" posts={savedPosts} />
      )}
    </>
  );
}
