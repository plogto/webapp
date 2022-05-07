import { Card } from "@components/Card";
import { TagInfo } from "@components/TagInfo";
import type { SearchResult } from "../@types";
import styles from "../Search.module.css";

interface Props {
  tag?: SearchResult["tag"];
}

export function Tags({ tag }: Props) {
  return tag?.tags?.length ? (
    <Card className={styles.tags}>
      {tag.tags?.map(tag => (
        <TagInfo key={tag.id} tag={tag} />
      ))}
    </Card>
  ) : null;
}
