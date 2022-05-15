import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import type { SearchQuery, SearchQueryRequest } from "@graphql/@types/search";
import { SEARCH } from "@graphql/search";
import type { SearchFilters, SearchForm, SearchResult } from "../@types";

export function useSearch() {
  const [search, { data, loading, error }] = useLazyQuery<
    SearchQuery,
    SearchQueryRequest
  >(SEARCH);
  const formMethods = useForm<SearchForm>({
    mode: "all",
  });
  const [result, setResult] = useState<SearchResult>();
  const [filter, setFilter] = useState<SearchFilters>("users");

  useEffect(() => {
    if (data) {
      setResult(data.search);
    }
  }, [data, search]);

  const onSubmit = (formData: SearchForm) => {
    if (formData.expression.length) {
      search({
        variables: {
          ...formData,
        },
      });
    } else {
      setResult(undefined);
    }
  };

  return { formMethods, onSubmit, loading, error, result, filter, setFilter };
}
