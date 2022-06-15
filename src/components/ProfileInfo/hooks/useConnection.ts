import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import type {
  FollowUserMutation,
  UnfollowUserMutation,
} from "@graphql/@types/connection";
import { FOLLOW_USER, UNFOLLOW_USER } from "@graphql/connection";
import type { UseConnectionProps } from "../ProfileInfo.types";

export function useConnection(props: UseConnectionProps) {
  const { userId } = props;
  const [followUser, followUserResponse] =
    useMutation<FollowUserMutation>(FOLLOW_USER);
  const [unfollowUser, unfollowUserResponse] =
    useMutation<UnfollowUserMutation>(UNFOLLOW_USER);

  const follow = useCallback(() => {
    followUser({
      variables: {
        userId,
      },
    });
  }, [followUser, userId]);

  const unfollow = useCallback(() => {
    unfollowUser({
      variables: {
        userId,
      },
    });
  }, [unfollowUser, userId]);

  return { follow, unfollow, followUserResponse, unfollowUserResponse };
}
