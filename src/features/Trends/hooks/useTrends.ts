import { Tag } from "@/@types/tag";
import { GetTrendsQuery } from "@/graphql/@types/tag";
import { GET_TRENDS } from "@/graphql/tag";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export function useTrends() {
  const { data } = useQuery<GetTrendsQuery>(GET_TRENDS);
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    if (data) {
      const { tags } = data.getTrends;
      setTags(tags);
    }
  }, [data]);

  return { tags };
}
