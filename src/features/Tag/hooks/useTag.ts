import { Post } from "@/@types/post";
import { Tag } from "@/@types/tag";
import { GetUserPostsByTagNameQuery } from "@/graphql/@types/post";
import { GetTagByTagNameQuery } from "@/graphql/@types/tag";
import { GET_USER_POSTS_BY_TAG_NAME } from "@/graphql/post";
import { GET_TAG_BY_TAG_NAME } from "@/graphql/tag";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useTag() {
  const router = useRouter();
  const tagName = router.query.tagName as string;
  const variables = { tagName };
  const getUserPostsByTagNameResponse = useQuery<
    GetUserPostsByTagNameQuery,
    {
      // TODO: fix this type
      tagName: string;
    }
  >(GET_USER_POSTS_BY_TAG_NAME, {
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
    if (getUserPostsByTagNameResponse.data) {
      const { posts } =
        getUserPostsByTagNameResponse.data.getUserPostsByTagName;
      setPosts(posts);
    }
  }, [getUserPostsByTagNameResponse.data]);

  useEffect(() => {
    if (getTagByTagNameResponse.data) {
      const tag = getTagByTagNameResponse.data.getTagByTagName;
      setTag(tag);
    }
  }, [getTagByTagNameResponse.data]);

  return { posts, tag };
}
