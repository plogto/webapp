import router from "next/router";
import { useQuery } from "@apollo/client";
import { GetUserFollowRequestsQuery } from "@/graphql/@types/connection";
import { GET_USER_FOLLOW_REQUESTS } from "@/graphql/connection";
import { useEffect, useState } from "react";
import { Connection } from "@/@types/connection";

export function useFollowRequests() {
  const { data } = useQuery<GetUserFollowRequestsQuery>(
    GET_USER_FOLLOW_REQUESTS,
  );
  const [followRequests, setFollowRequests] = useState<Connection[]>();

  useEffect(() => {
    if (data) {
      const { connections } = data.getUserFollowRequests;
      setFollowRequests(connections);
    }
  }, [data]);

  return { followRequests };
}
