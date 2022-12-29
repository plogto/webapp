import { useEffect } from "react";
import { useRouter } from "next/router";
import { QueryKeys } from "@enums";
import { useLazyQuery } from "@apollo/client";
import type { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_SHORT_POST_BY_URL } from "@graphql/post";

export function useParentPost() {
  const { query } = useRouter();
  const url = query?.[QueryKeys.PARENT_URL] as string;
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
