import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  AcceptUserMutation,
  FollowUserMutation,
  RejectUserMutation,
  UnfollowUserMutation,
} from "@graphql/@types/connection";
import {
  ACCEPT_USER,
  FOLLOW_USER,
  GET_FOLLOW_REQUESTS,
  REJECT_USER,
  UNFOLLOW_USER,
} from "@graphql/connection";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import type { UseActionProps } from "./User.types";

export function useActions(props: UseActionProps) {
  const { id } = props;
  const { user } = useAccountContext();

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
        refetchQueries: [
          { query: GET_FOLLOW_REQUESTS },
          {
            query: GET_USER_BY_USERNAME,
            variables: { username: user?.username },
          },
        ],
      });
  };

  const reject = () => {
    id &&
      rejectUser({
        variables: {
          userId: id,
        },
        refetchQueries: [{ query: GET_FOLLOW_REQUESTS }],
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
