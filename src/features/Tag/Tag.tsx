import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { PageLoaderHeightType } from "@enums";
import { NotFound } from "@components/NotFound";
import { PageHeader } from "@components/PageHeader";
import { PageLoader } from "@components/PageLoader";
import styles from "./Tag.module.css";
import { TagContent } from "./components/TagContent";
import { TagInfo } from "./components/TagInfo";
import { useTag } from "./useTag";

export function Tag() {
  const { tagData, TABS } = useTag();

  if (tagData.isLoading) {
    return <PageLoader heightType={PageLoaderHeightType.FULL} />;
  }

  if (tagData.data) {
    return (
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

  return <NotFound />;
}
