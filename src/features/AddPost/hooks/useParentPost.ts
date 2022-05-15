import { useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import type { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_SHORT_POST_BY_URL } from "@graphql/post";
import { useRouter } from "next/router";

export function useParentPost() {
  const { query } = useRouter();
  const url = query.parentUrl as string;
  const [getParentPost, { data }] = useLazyQuery<GetPostByUrlQuery>(
    GET_SHORT_POST_BY_URL,
  );

  useEffect(() => {
    if (url) {
      getParentPost({ variables: { url } });
    }
  }, [getParentPost, url]);

  return {
    parentPost: data?.getPostByUrl,
  };
}
