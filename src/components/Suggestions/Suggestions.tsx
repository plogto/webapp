import { useMemo } from "react";
import type { SuggestionsProps } from "./Suggestions.types";
import { TagsSuggestions } from "./TagsSuggestions";
import { UsersSuggestions } from "./UsersSuggestions";

export function Suggestions(props: SuggestionsProps) {
  const { active, tags, users, handleClickOnSuggestionItem } = props;

  const component = useMemo(() => {
    switch (active) {
      case "tags":
        return (
          <TagsSuggestions
            tags={tags}
            handleClickOnSuggestionItem={handleClickOnSuggestionItem}
          />
        );
      case "users":
        return (
          <UsersSuggestions
            users={users}
            handleClickOnSuggestionItem={handleClickOnSuggestionItem}
          />
        );
      case "none":
        return null;
    }
  }, [active, handleClickOnSuggestionItem, tags, users]);

  return component;
}
