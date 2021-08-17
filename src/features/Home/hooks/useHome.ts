import { PageUrls } from "@/@enums/pages";
import { Post } from "@/@types/post";
import { useAccount } from "@/context/AccountContext";
import { GET_USER_POSTS_BY_USERNAME } from "@/graphql/post";
import { useLazyQuery } from "@apollo/client";
import router from "next/router";
import { useEffect, useState } from "react";

export function useHome() {
  const { user, isAuthenticated } = useAccount();
  const [getUserPostsByUsername, { error, loading, data }] = useLazyQuery(
    GET_USER_POSTS_BY_USERNAME,
  );
  const [posts, setPosts] = useState<Post[]>([]);

  // TODO: improve this part
  useEffect(() => {
    if (!isAuthenticated) {
      router.push(PageUrls.LOGIN);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user) {
      getUserPostsByUsername({
        variables: {
          username: user?.username,
        },
      });
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      setPosts(data.getUserPostsByUsername);
    }
  }, [data]);

  return { error, loading, user, posts };
}
