import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useFollowRequestsContext } from "@contexts/FollowRequestsContext";
import { GET_FOLLOW_REQUESTS } from "@graphql/connection";
import type { GetFollowRequestsQuery } from "@graphql/@types/connection";

export function useFollowRequests() {
  const { data } = useQuery<GetFollowRequestsQuery>(GET_FOLLOW_REQUESTS);
  const { followRequests, setFollowRequests } = useFollowRequestsContext();

  useEffect(() => {
    if (data) {
      const { connections } = data.getFollowRequests;
      setFollowRequests(connections);
    }
  }, [data]);

  return { followRequests };
}
