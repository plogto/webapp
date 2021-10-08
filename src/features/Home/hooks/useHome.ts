import { useLazyQuery } from "@apollo/client";
import router from "next/router";
import { useEffect, useState } from "react";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { GET_POSTS_BY_USERNAME } from "@graphql/post";
import type { GetPostsByUsernameQuery } from "@graphql/@types/post";
import type { Post } from "@t/post";

export function useHome() {
  const { user, isAuthenticated } = useAccountContext();
  const [getPostsByUsername, { error, loading, data }] =
    useLazyQuery<GetPostsByUsernameQuery>(GET_POSTS_BY_USERNAME);
  const [posts, setPosts] = useState<Post[]>([]);

  // TODO: improve this part
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(PageUrls.LOGIN);
    }
  }, [isAuthenticated]);

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
    }
  }, [data]);

  return { error, loading, user, posts };
}
