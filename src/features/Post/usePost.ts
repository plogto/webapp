import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import type { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_POST_BY_URL } from "@graphql/post";

export function usePost() {
  const { query } = useRouter();
  const url = query.postUrl as string;
  const { data } = useQuery<GetPostByUrlQuery>(GET_POST_BY_URL, {
    variables: { url },
  });

  const post = data?.getPostByUrl;

  return { post };
}
