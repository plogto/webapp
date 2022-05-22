import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useFollowRequestsContext } from "@contexts/FollowRequestsContext";
import type {
  AcceptUserMutation,
  FollowUserMutation,
  RejectUserMutation,
  UnfollowUserMutation,
} from "@graphql/@types/connection";
import {
  ACCEPT_USER,
  FOLLOW_USER,
  REJECT_USER,
  UNFOLLOW_USER,
} from "@graphql/connection";

interface Props {
  id: string;
}

export function useActions({ id }: Props) {
  const [followUser, followUserResponse] =
    useMutation<FollowUserMutation>(FOLLOW_USER);
  const [unfollowUser, unfollowUserResponse] =
    useMutation<UnfollowUserMutation>(UNFOLLOW_USER);
  const [acceptUser, acceptUserResponse] =
    useMutation<AcceptUserMutation>(ACCEPT_USER);
  const [rejectUser, rejectUserResponse] =
    useMutation<RejectUserMutation>(REJECT_USER);

  const follow = () => {
    id &&
      followUser({
        variables: {
          userId: id,
        },
      });
  };

  const unfollow = () => {
    id &&
      unfollowUser({
        variables: {
          userId: id,
        },
      });
  };

  const accept = () => {
    id &&
      acceptUser({
        variables: {
          userId: id,
        },
      });
  };

  const reject = () => {
    id &&
      rejectUser({
        variables: {
          userId: id,
        },
      });
  };

  const { deleteFollowRequestById } = useFollowRequestsContext();

  useEffect(() => {
    if (acceptUserResponse.data) {
      const { id } = acceptUserResponse.data.acceptUser;
      deleteFollowRequestById(id);
    }
  }, [acceptUserResponse.data]);

  useEffect(() => {
    if (rejectUserResponse.data) {
      const { id } = rejectUserResponse.data.rejectUser;
      deleteFollowRequestById(id);
    }
  }, [rejectUserResponse.data]);

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
