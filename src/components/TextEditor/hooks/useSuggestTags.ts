import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useAddPostContext } from "@contexts/AddPostContext";
import type { SearchQuery, SearchQueryRequest } from "@graphql/@types/search";
import { SEARCH_TAGS } from "@graphql/search";

export function useSuggestTags() {
  const [searchTags, searchTagsResponse] = useLazyQuery<
    SearchQuery,
    SearchQueryRequest
  >(SEARCH_TAGS);

  const { setTagSuggestions } = useAddPostContext();

  useEffect(() => {
    if (searchTagsResponse?.data?.search) {
      setTagSuggestions(searchTagsResponse?.data?.search?.tag);
    }
  }, [searchTagsResponse, setTagSuggestions]);

  return { searchTags };
}
