import { GET_USER_POSTS_BY_USERNAME } from "@/graphql/post";
import { GET_USER_BY_USERNAME } from "@/graphql/user";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useProfileContext } from "@/context/ProfileContext";
import type { GetUserByUsernameQuery } from "@/graphql/@types/user";
import type { GetUserPostsByUsernameQuery } from "@/graphql/@types/post";

export function useProfile() {
  const router = useRouter();
  const username = router.query.username;
  const { setUser, setPosts, user, posts } = useProfileContext();
  const counts = [
    {
      title: `Follower${user?.followersCount !== 1 ? "s" : ""}`,
      value: user?.followersCount,
      href: `${user?.username}/followers`,
    },
    {
      title: "Following",
      value: user?.followingCount,
      href: `${user?.username}/following`,
    },
    {
      title: `Post${user?.postsCount !== 1 ? "s" : ""}`,
      value: user?.postsCount,
      href: `${user?.username}`,
    },
  ];

  const [getUserByUsername, getUserByUsernameResponse] =
    useLazyQuery<GetUserByUsernameQuery>(GET_USER_BY_USERNAME);
  const [getUserPostsByUsername, getUserPostsByUsernameResponse] =
    useLazyQuery<GetUserPostsByUsernameQuery>(GET_USER_POSTS_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getUserByUsername({
        variables: {
          username,
        },
      });
      getUserPostsByUsername({
        variables: {
          username,
        },
      });
    }
  }, [username, getUserByUsername]);

  useEffect(() => {
    if (getUserByUsernameResponse.data) {
      setUser(getUserByUsernameResponse.data.getUserByUsername);
    }
  }, [getUserByUsernameResponse.data]);

  useEffect(() => {
    if (getUserPostsByUsernameResponse.data) {
      setPosts(
        getUserPostsByUsernameResponse.data.getUserPostsByUsername.posts,
      );
    } else {
      setPosts([]);
    }
  }, [getUserPostsByUsernameResponse.data]);

  return { getUserByUsernameResponse, user, router, posts, counts };
}
