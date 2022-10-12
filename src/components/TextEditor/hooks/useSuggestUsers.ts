import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useAddPostContext } from "@contexts/AddPostContext";
import type { SearchQuery, SearchQueryRequest } from "@graphql/@types/search";
import { SEARCH_USERS } from "@graphql/search";

export function useSuggestUsers() {
  const [searchUsers, searchUsersResponse] = useLazyQuery<
    SearchQuery,
    SearchQueryRequest
  >(SEARCH_USERS);

  const { setUserSuggestions } = useAddPostContext();

  useEffect(() => {
    if (searchUsersResponse?.data?.search) {
      setUserSuggestions(searchUsersResponse?.data?.search?.user);
    }
  }, [searchUsersResponse?.data?.search, setUserSuggestions]);

  return { searchUsers };
}
