import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { Placeholder } from "@components/Placeholder";
import { TagInfo } from "@components/TagInfo";
import styles from "../Search.module.css";
import type { SearchResult } from "../Search.types";
import isEmpty from "lodash/isEmpty";

interface Props {
  tag?: SearchResult["tag"];
}

export function Tags({ tag }: Props) {
  const { t } = useTranslation("common");

  return !isEmpty(tag?.edges) ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.tags}>
      {tag?.edges?.map(({ node }) => (
        <TagInfo key={node.id} tag={node} />
      ))}
    </Card>
  ) : (
    <Placeholder
      className={styles.placeholder}
      title={t("noResultFound")}
      icon="Hashtag"
    />
  );
}
