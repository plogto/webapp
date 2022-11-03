import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { PageLoaderHeightType } from "@enums";
import { PageHeader } from "@components/PageHeader";
import { PageLoader } from "@components/PageLoader";
import { Placeholder } from "@components/Placeholder";
import styles from "./Tag.module.css";
import { TagContent } from "./components/TagContent";
import { TagInfo } from "./components/TagInfo";
import { useTag } from "./useTag";

export function Tag() {
  const { tagData, TABS, t } = useTag();

  return tagData.isLoading ? (
    <PageLoader heightType={PageLoaderHeightType.FULL} />
  ) : !tagData.data ? (
    <Placeholder
      title={t("status.notFound.title")}
      icon="Hashtag"
      className={styles.notFound}
    />
  ) : (
    <div className={styles.wrapper}>
      {isMobile && (
        <PageHeader
          className={styles.header}
          title={`#${tagData?.data?.name}`}
        />
      )}
      {/* TODO: add skeleton component */}
      {tagData.data && (
        <div className={styles.cards} id={ID.PROFILE_CARDS}>
          <TagInfo tag={tagData?.data} />
          <TagContent tabs={TABS} />
        </div>
      )}
    </div>
  );
}
