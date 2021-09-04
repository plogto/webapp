import { useQuery } from "@apollo/client";
import { GetUserFollowRequestsQuery } from "@/graphql/@types/connection";
import { GET_USER_FOLLOW_REQUESTS } from "@/graphql/connection";
import { useEffect } from "react";
import { useFollowRequestsContext } from "@/context/FollowRequestsContext";

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
