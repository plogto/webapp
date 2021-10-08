import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GET_POSTS_BY_TAG_NAME } from "@graphql/post";
import { GET_TAG_BY_TAG_NAME } from "@graphql/tag";
import type { GetPostsByTagNameQuery } from "@graphql/@types/post";
import type { GetTagByTagNameQuery } from "@graphql/@types/tag";
import type { Post } from "@t/post";
import type { Tag } from "@t/tag";

export function useTag() {
  const router = useRouter();
  const tagName = router.query.tagName as string;
  const variables = { tagName };
  const getPostsByTagNameResponse = useQuery<
    GetPostsByTagNameQuery,
    {
      // TODO: fix this type
      tagName: string;
    }
  >(GET_POSTS_BY_TAG_NAME, {
    variables,
  });
  const getTagByTagNameResponse = useQuery<
    GetTagByTagNameQuery,
    {
      // TODO: fix this type
      tagName: string;
    }
  >(GET_TAG_BY_TAG_NAME, {
    variables,
  });
  const [posts, setPosts] = useState<Post[]>([]);
  const [tag, setTag] = useState<Tag>();

  useEffect(() => {
    if (getPostsByTagNameResponse.data) {
      const { posts } = getPostsByTagNameResponse.data.getPostsByTagName;
      setPosts(posts);
    }
  }, [getPostsByTagNameResponse.data]);

  useEffect(() => {
    if (getTagByTagNameResponse.data) {
      const tag = getTagByTagNameResponse.data.getTagByTagName;
      setTag(tag);
    }
  }, [getTagByTagNameResponse.data]);

  return { posts, tag };
}
