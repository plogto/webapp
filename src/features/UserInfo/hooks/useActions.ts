import {
  ACCEPT_USER,
  FOLLOW_USER,
  REJECT_USER,
  UNFOLLOW_USER,
} from "@/graphql/connection";
import { useMutation } from "@apollo/client";
import type {
  AcceptUserMutation,
  FollowUserMutation,
  RejectUserMutation,
  UnfollowUserMutation,
} from "@/graphql/@types/connection";

type Props = {
  id: string;
};

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
    console.log(id);
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
