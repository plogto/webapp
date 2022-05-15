import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/client";
import type { GetPostsByUsernameQuery } from "@graphql/@types/post";
import type { GetUserByUsernameQuery } from "@graphql/@types/user";
import { GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import { formatCountTitle } from "@utils/formatter";
import { useRouter } from "next/router";

export function useProfile() {
  const { query } = useRouter();
  const username = query.username;
  const variables = useMemo(
    () => ({
      username,
    }),
    [username],
  );
  const userResponse = useQuery<GetUserByUsernameQuery>(GET_USER_BY_USERNAME, {
    variables,
  });
  const postsResponse = useQuery<GetPostsByUsernameQuery>(
    GET_POSTS_BY_USERNAME,
    { variables },
  );

  const user = useMemo(
    () => userResponse.data?.getUserByUsername,
    [userResponse.data?.getUserByUsername],
  );

  const { t } = useTranslation("common");
  // TODO: refactor this counts
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
    },
  ];

  return {
    userData: user,
    isUserLoading: userResponse.loading,
    postsData: postsResponse.data?.getPostsByUsername.posts,
    isPostsLoading: postsResponse.loading,
    counts,
  };
}
