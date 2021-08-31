import {
  ACCEPT_USER,
  FOLLOW_USER,
  REJECT_USER,
  UNFOLLOW_USER,
} from "@/graphql/connection";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useUserProfile } from "@/context/UserProfileContext";
import type {
  AcceptUserMutation,
  FollowUserMutation,
  RejectUserMutation,
  UnfollowUserMutation,
} from "@/graphql/@types/connection";

export function useActions() {
  const { setUser, user } = useUserProfile();

  const [followUser, followUserResponse] =
    useMutation<FollowUserMutation>(FOLLOW_USER);
  const [unfollowUser, unfollowUserResponse] =
    useMutation<UnfollowUserMutation>(UNFOLLOW_USER);
  const [acceptUser, acceptUserResponse] =
    useMutation<AcceptUserMutation>(ACCEPT_USER);
  const [rejectUser, rejectUserResponse] =
    useMutation<RejectUserMutation>(REJECT_USER);

  useEffect(() => {
    if (followUserResponse.data) {
      const { status } = followUserResponse.data.followUser;
      // TODO: fix type
      setUser((prevState: any) => {
        return {
          ...prevState,
          connectionStatus: status,
        };
      });
    }
  }, [followUserResponse.data]);

  useEffect(() => {
    if (unfollowUserResponse.data) {
      const { status } = unfollowUserResponse.data.unfollowUser;
      // TODO: fix type
      setUser((prevState: any) => {
        return {
          ...prevState,
          connectionStatus: status,
        };
      });
    }
  }, [unfollowUserResponse.data]);

  useEffect(() => {
    if (acceptUserResponse.data) {
      const { status } = acceptUserResponse.data.acceptUser;
      // TODO: fix type
      setUser((prevState: any) => {
        return {
          ...prevState,
          connectionStatus: status,
        };
      });
    }
  }, [acceptUserResponse.data]);

  useEffect(() => {
    if (rejectUserResponse.data) {
      const { status } = rejectUserResponse.data.rejectUser;
      // TODO: fix type
      setUser((prevState: any) => {
        return {
          ...prevState,
          connectionStatus: status,
        };
      });
    }
  }, [rejectUserResponse.data]);

  const follow = () => {
    user &&
      followUser({
        variables: {
          userId: user?.id,
        },
      });
  };

  const unfollow = () => {
    user &&
      unfollowUser({
        variables: {
          userId: user?.id,
        },
      });
  };

  const accept = () => {
    user &&
      acceptUser({
        variables: {
          userId: user?.id,
        },
      });
  };

  const reject = () => {
    user &&
      rejectUser({
        variables: {
          userId: user?.id,
        },
      });
  };

  return {
    follow,
    unfollow,
    accept,
    reject,
    followUserResponse,
    unfollowUserResponse,
    acceptUserResponse,
    rejectUserResponse,
  };
}
