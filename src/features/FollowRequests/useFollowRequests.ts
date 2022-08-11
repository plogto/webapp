import { useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import type { GetFollowRequestsQuery } from "@graphql/@types/connection";
import { GET_FOLLOW_REQUESTS } from "@graphql/connection";

export function useFollowRequests() {
  const [getFollowRequests, { data }] =
    useLazyQuery<GetFollowRequestsQuery>(GET_FOLLOW_REQUESTS);

  useEffect(() => {
    getFollowRequests();
  }, [getFollowRequests]);

  const followRequests = useMemo(
    () => data?.getFollowRequests,
    [data?.getFollowRequests],
  );

  return { followRequests };
}
