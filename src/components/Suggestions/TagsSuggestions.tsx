import { useTranslation } from "react-i18next";
import { formatCountTitle } from "@utils/formatter";
import styles from "./Suggestions.module.css";
import type { TagsSuggestionsProps } from "./Suggestions.types";

export function TagsSuggestions(props: TagsSuggestionsProps) {
  const { tags, handleClickOnTag } = props;
  const { t } = useTranslation("common");

  return (
    <div className={styles.tags}>
      {tags.map(({ id, name, count }) => (
        <button
          type="button"
          onClick={() => handleClickOnTag(`#${name}`)}
          key={id}
          className={styles.tag}
        >
          <div className={styles.name}>#{name}</div>
          <small className={styles.count}>
            {
              formatCountTitle({
                singular: t("post"),
                plural: t("posts"),
                count,
              }).text
            }
          </small>
        </button>
      ))}
    </div>
  );
}
