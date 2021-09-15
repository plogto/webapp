import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SEARCH } from "@/graphql/search";
import { useLazyQuery } from "@apollo/client";
import type { SearchFilters, SearchForm, SearchResult } from "../@types";
import { SearchQuery } from "@/graphql/@types/search";

export function useSearch() {
  const [search, { data, loading, error }] = useLazyQuery<
    SearchQuery,
    {
      expression: string;
    }
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

  const submit = (formData: SearchForm) => {
    formData.expression.length &&
      search({
        variables: {
          ...formData,
        },
      });
  };

  return { formMethods, submit, loading, error, result, filter, setFilter };
}
