import styles from "../Search.module.css";
import { TagInfo } from "@/components/TagInfo";
import type { SearchResult } from "../@types";

type Props = {
  tag?: SearchResult["tag"];
};

export function Tags({ tag }: Props) {
  return tag ? (
    <div className={styles.tags}>
      {tag.tags?.map(tag => (
        <TagInfo key={tag.id} tag={tag} />
      ))}
    </div>
  ) : null;
}
