import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { TagInfo } from "@components/TagInfo";
import styles from "../Search.module.css";
import type { SearchResult } from "../Search.types";

interface Props {
  tag?: SearchResult["tag"];
}

export function Tags({ tag }: Props) {
  return tag?.tags?.length ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.tags}>
      {tag.tags?.map(tag => (
        <TagInfo key={tag.id} tag={tag} />
      ))}
    </Card>
  ) : null;
}
