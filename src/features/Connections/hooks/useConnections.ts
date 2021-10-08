import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useConnectionsContext } from "@context/ConnectionsContext";

import {
  GET_FOLLOWERS_BY_USERNAME,
  GET_FOLLOWING_BY_USERNAME,
} from "@graphql/connection";
import type { ConnectionsProps } from "../@types";
import type {
  GetFollowersByUsernameQuery,
  GetFollowingByUsernameQuery,
} from "@graphql/@types/connection";

export function useConnections({ type }: ConnectionsProps) {
  const router = useRouter();
  const { followers, following, setFollowers, setFollowing } =
    useConnectionsContext();

  const [getFollowersByUsername, getFollowersByUsernameResponse] = useLazyQuery<
    GetFollowersByUsernameQuery,
    { username: string }
  >(GET_FOLLOWERS_BY_USERNAME);

  const [getFollowingByUsername, getFollowingByUsernameResponse] = useLazyQuery<
    GetFollowingByUsernameQuery,
    { username: string }
  >(GET_FOLLOWING_BY_USERNAME);

  useEffect(() => {
    if (router.query.username) {
      const { username } = router.query;
      if (type === "followers") {
        getFollowersByUsername({
          variables: { username: username as string },
        });
      } else if (type === "following") {
        getFollowingByUsername({
          variables: { username: username as string },
        });
      }
    }
  }, [router]);

  useEffect(() => {
    if (getFollowersByUsernameResponse.data) {
      const { getFollowersByUsername } = getFollowersByUsernameResponse.data;

      setFollowers(getFollowersByUsername);
    }
  }, [getFollowersByUsernameResponse.data]);

  useEffect(() => {
    if (getFollowingByUsernameResponse.data) {
      const { getFollowingByUsername } = getFollowingByUsernameResponse.data;

      setFollowing(getFollowingByUsername);
    }
  }, [getFollowingByUsernameResponse.data]);

  return {
    connections: {
      followers,
      following,
    },
  };
}
