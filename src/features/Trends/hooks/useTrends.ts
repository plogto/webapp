import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_TRENDS } from "@graphql/tag";
import type { GetTrendsQuery } from "@graphql/@types/tag";

export function useTrends() {
  const { data } = useQuery<GetTrendsQuery>(GET_TRENDS);
  const tags = useMemo(() => data?.getTrends.tags || [], [data]);

  return { tags };
}
