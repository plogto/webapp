import { Post } from "@/@types/post";
import { GetUserPostsByTagNameQuery } from "@/graphql/@types/post";
import { GET_USER_POSTS_BY_TAG_NAME } from "@/graphql/post";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useTag() {
  const router = useRouter();
  const tagName = router.query.tagName as string;
  const { data } = useQuery<
    GetUserPostsByTagNameQuery,
    {
      // TODO: fix this type
      tagName: string;
    }
  >(GET_USER_POSTS_BY_TAG_NAME, {
    variables: {
      tagName,
    },
  });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (data) {
      const { posts } = data.getUserPostsByTagName;
      setPosts(posts);
    }
  }, [data]);

  return { posts, tagName };
}
