import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { ContentStatus } from "@components/ContentStatus";
import { PageHeader } from "@components/PageHeader";
import styles from "./Tag.module.css";
import { TagContent } from "./components/TagContent";
import { TagInfo } from "./components/TagInfo";
import { useTag } from "./useTag";

export function Tag() {
  const { tagData, TABS, t } = useTag();

  return (
    <div className={styles.wrapper}>
      {isMobile && (
        <PageHeader
          className={styles.header}
          title={`#${tagData?.data?.name}`}
        />
      )}
      {tagData.data ? (
        <div className={styles.cards} id={ID.PROFILE_CARDS}>
          <TagInfo tag={tagData?.data} />
          <TagContent tabs={TABS} />
        </div>
      ) : (
        // TODO: implement a not found page for this part
        <ContentStatus
          title={t("status.notFound.title")}
          icon="Hashtag"
          className={styles.notFound}
        />
      )}
    </div>
  );
}
