import { useMemo } from "react";
import type { SuggestionsProps } from "./Suggestions.types";
import { TagsSuggestions } from "./TagsSuggestions";

export function Suggestions(props: SuggestionsProps) {
  const { active, tags, handleClickOnTag } = props;

  const component = useMemo(() => {
    switch (active) {
      case "tags":
        return (
          <TagsSuggestions tags={tags} handleClickOnTag={handleClickOnTag} />
        );
      case "users":
        return <></>;
      case "none":
        return <></>;
    }
  }, [active, handleClickOnTag, tags]);

  return component;
}
