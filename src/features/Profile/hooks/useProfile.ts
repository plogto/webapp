import { Post } from "@/@types/post";
import type { User } from "@/@types/user";
import { GET_USER_POSTS_BY_USERNAME } from "@/graphql/post";
import { GET_USER_BY_USERNAME } from "@/graphql/user";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useProfile() {
  const router = useRouter();
  const username = router.query.username;
  const [getUserByUsername, { error, loading, data }] =
    useLazyQuery(GET_USER_BY_USERNAME);
  const [getUserPostsByUsername, { data: postsData }] = useLazyQuery(
    GET_USER_POSTS_BY_USERNAME,
  );

  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post[]>([]);

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
    if (data) {
      setUser(data.getUserByUsername);
    }
  }, [data]);

  useEffect(() => {
    if (postsData) {
      setPosts(postsData.getUserPostsByUsername.posts);
    }
  }, [postsData]);

  return { error, loading, user, router, posts };
}
