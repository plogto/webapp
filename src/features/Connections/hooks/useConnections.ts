import { useLazyQuery } from "@apollo/client";
import type {
  GetUserFollowersByUsernameQuery,
  GetUserFollowingByUsernameQuery,
} from "@graphql/@types/connection";
import {
  GET_USER_FOLLOWERS_BY_USERNAME,
  GET_USER_FOLLOWING_BY_USERNAME,
} from "@graphql/connection";
import { useRouter } from "next/router";
import type { ConnectionsProps } from "../@types";
import { useEffect } from "react";
import { useConnectionsContext } from "@context/ConnectionsContext";

export function useConnections({ type }: ConnectionsProps) {
  const router = useRouter();
  const { followers, following, setFollowers, setFollowing } =
    useConnectionsContext();

  const [getUserFollowersByUsername, getUserFollowersByUsernameResponse] =
    useLazyQuery<GetUserFollowersByUsernameQuery, { username: string }>(
      GET_USER_FOLLOWERS_BY_USERNAME,
    );

  const [getUserFollowingByUsername, getUserFollowingByUsernameResponse] =
    useLazyQuery<GetUserFollowingByUsernameQuery, { username: string }>(
      GET_USER_FOLLOWING_BY_USERNAME,
    );

  useEffect(() => {
    if (router.query.username) {
      const { username } = router.query;
      if (type === "followers") {
        getUserFollowersByUsername({
          variables: { username: username as string },
        });
      } else if (type === "following") {
        getUserFollowingByUsername({
          variables: { username: username as string },
        });
      }
    }
  }, [router]);

  useEffect(() => {
    if (getUserFollowersByUsernameResponse.data) {
      const { getUserFollowersByUsername } =
        getUserFollowersByUsernameResponse.data;

      setFollowers(getUserFollowersByUsername);
    }
  }, [getUserFollowersByUsernameResponse.data]);

  useEffect(() => {
    if (getUserFollowingByUsernameResponse.data) {
      const { getUserFollowingByUsername } =
        getUserFollowingByUsernameResponse.data;

      setFollowing(getUserFollowingByUsername);
    }
  }, [getUserFollowingByUsernameResponse.data]);

  return {
    connections: {
      followers,
      following,
    },
  };
}
