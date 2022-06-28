import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import type { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_POST_BY_URL } from "@graphql/post";

export function usePost() {
  const { query } = useRouter();
  const url = query.postUrl as string;
  const [getPost, { data }] = useLazyQuery<GetPostByUrlQuery>(GET_POST_BY_URL);

  useEffect(() => {
    if (url) {
      getPost({
        variables: { url },
      });
    }
  }, [getPost, url]);

  const post = data?.getPostByUrl;

  return { post };
}
