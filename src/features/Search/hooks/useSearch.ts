import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchFilters } from "@enums";
import { useLazyQuery } from "@apollo/client";
import type { SearchQuery, SearchQueryRequest } from "@graphql/@types/search";
import { SEARCH } from "@graphql/search";
import type { SearchForm, SearchResult } from "../Search.types";

export function useSearch() {
  const [search, { data, loading, error }] = useLazyQuery<
    SearchQuery,
    SearchQueryRequest
  >(SEARCH);
  const formMethods = useForm<SearchForm>({
    mode: "all",
  });
  const { getValues } = formMethods;
  const [result, setResult] = useState<SearchResult>();
  const [filter, setFilter] = useState<SearchFilters>(SearchFilters.USERS);

  useEffect(() => {
    if (data) {
      setResult(data.search);
    }
  }, [data, getValues, search]);

  const onSubmit = ({ expression }: SearchForm) => {
    if (expression.length) {
      if (/^#\w/.test(expression)) {
        setFilter(SearchFilters.TAGS);
      } else {
        setFilter(SearchFilters.USERS);
      }

      search({
        variables: {
          expression: /^(#|@)\w/.test(expression)
            ? expression.substring(1)
            : expression,
        },
      });
    } else {
      setResult(undefined);
    }
  };

  return { formMethods, onSubmit, loading, error, result, filter, setFilter };
}
