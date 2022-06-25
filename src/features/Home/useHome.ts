import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { GetPostsByUsernameQuery } from "@graphql/@types/post";
import { GET_POSTS_BY_USERNAME } from "@graphql/post";
import type { Post } from "@t/post";
import type { Status } from "@t/status";

export function useHome() {
  const { push } = useRouter();
  const { user, isAuthenticated } = useAccountContext();
  const [isLoading, setIsLoading] = useState(true);
  const [getPostsByUsername, { error, loading, data }] =
    useLazyQuery<GetPostsByUsernameQuery>(GET_POSTS_BY_USERNAME);
  // TODO: remove this state
  const [posts, setPosts] = useState<Post[]>([]);
  const { t } = useTranslation("post");

  // TODO: improve this part
  useEffect(() => {
    if (!isAuthenticated) {
      push(PageUrls.LOGIN);
    }
  }, [isAuthenticated, push]);

  useEffect(() => {
    if (user) {
      getPostsByUsername({
        variables: {
          username: user?.username,
        },
      });
    }
  }, [user, getPostsByUsername]);

  useEffect(() => {
    if (data) {
      setPosts(data.getPostsByUsername.posts);
      setIsLoading(loading);
    }
  }, [data, loading]);

  const emptyStatus: Status = useMemo(
    () => ({
      title: t("status.noPosts.title"),
      icon: "Photo",
    }),
    [t],
  );

  const getMoreData = () => {
    // TODO: get more data
  };

  return { error, isLoading, user, posts, emptyStatus, getMoreData };
}
