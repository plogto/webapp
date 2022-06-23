import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import type {
  GetTrendsQuery,
  GetTrendsQueryRequest,
} from "@graphql/@types/tag";
import { GET_TRENDS } from "@graphql/tag";

export function useTrends() {
  const { data } = useQuery<GetTrendsQuery, GetTrendsQueryRequest>(GET_TRENDS, {
    variables: { limit: 8 },
  });
  const tags = useMemo(() => data?.getTrends.tags || [], [data]);

  return { tags };
}
