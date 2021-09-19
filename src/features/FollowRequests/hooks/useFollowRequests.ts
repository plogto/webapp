import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useFollowRequestsContext } from "@context/FollowRequestsContext";
import { GET_USER_FOLLOW_REQUESTS } from "@graphql/connection";
import type { GetUserFollowRequestsQuery } from "@graphql/@types/connection";

export function useFollowRequests() {
  const { data } = useQuery<GetUserFollowRequestsQuery>(
    GET_USER_FOLLOW_REQUESTS,
  );
  const { followRequests, setFollowRequests } = useFollowRequestsContext();

  useEffect(() => {
    if (data) {
      const { connections } = data.getUserFollowRequests;
      setFollowRequests(connections);
    }
  }, [data]);

  return { followRequests };
}
