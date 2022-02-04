import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useProfileContext } from "@contexts/ProfileContext";
import { GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import { formatCountTitle } from "@utils/formatter";
import type { GetPostsByUsernameQuery } from "@graphql/@types/post";
import type { GetUserByUsernameQuery } from "@graphql/@types/user";

export function useProfile() {
  const router = useRouter();
  const username = router.query.username;
  const { setUser, setPosts, user, posts } = useProfileContext();
  const { t } = useTranslation("common");
  const counts = [
    {
      ...formatCountTitle({
        singular: t("follower"),
        plural: t("followers"),
        count: user?.followersCount,
      }),
      href: `${user?.username}/followers`,
    },
    {
      ...formatCountTitle({
        singular: t("following"),
        plural: t("following"),
        count: user?.followingCount,
      }),
      href: `${user?.username}/following`,
    },
    {
      ...formatCountTitle({
        singular: t("post"),
        plural: t("posts"),
        count: user?.postsCount,
      }),
      href: `${user?.username}`,
    },
  ];

  const [getUserByUsername, getUserByUsernameResponse] =
    useLazyQuery<GetUserByUsernameQuery>(GET_USER_BY_USERNAME);
  const [getPostsByUsername, getPostsByUsernameResponse] =
    useLazyQuery<GetPostsByUsernameQuery>(GET_POSTS_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getUserByUsername({
        variables: {
          username,
        },
      });
      getPostsByUsername({
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
    if (getPostsByUsernameResponse.data) {
      setPosts(getPostsByUsernameResponse.data.getPostsByUsername.posts);
    } else {
      setPosts([]);
    }
  }, [getPostsByUsernameResponse.data]);

  return { getUserByUsernameResponse, user, router, posts, counts };
}
