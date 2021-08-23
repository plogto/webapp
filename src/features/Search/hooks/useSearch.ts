import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SEARCH } from "@/graphql/search";
import { useLazyQuery } from "@apollo/client";
import type { SearchForm, SearchResult } from "../@types";

export function useSearch() {
  const [search, { data, loading, error }] = useLazyQuery(SEARCH);
  const formMethods = useForm<SearchForm>({
    mode: "all",
  });
  const [result, setResult] = useState<SearchResult>();

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

  return { formMethods, submit, loading, error, result };
}
