import { FOLLOW_USER, UNFOLLOW_USER } from "@/graphql/connection";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useUserProfileContext } from "@/context/UserProfileContext";
import type {
  FollowUserMutation,
  UnfollowUserMutation,
} from "@/graphql/@types/connection";

export function useConnection() {
  const { setUser, user } = useUserProfileContext();

  const [followUser, followUserResponse] =
    useMutation<FollowUserMutation>(FOLLOW_USER);
  const [unfollowUser, unfollowUserResponse] =
    useMutation<UnfollowUserMutation>(UNFOLLOW_USER);

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

  return { follow, unfollow, followUserResponse, unfollowUserResponse };
}
