import { useTranslation } from "react-i18next";
import { formatCountTitle } from "@utils/formatter";
import styles from "./Suggestions.module.css";
import type { TagsSuggestionsProps } from "./Suggestions.types";
import isEmpty from "lodash/isEmpty";

export function TagsSuggestions(props: TagsSuggestionsProps) {
  const { tags, handleClickOnSuggestionItem } = props;
  const { t } = useTranslation("common");

  if (!isEmpty(tags?.edges)) {
    return (
      <div className={styles.tags}>
        {tags.edges?.map(({ node: { id, name, count } }) => (
          <button
            type="button"
            onClick={() => handleClickOnSuggestionItem(`#${name}`)}
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

  return null;
}
