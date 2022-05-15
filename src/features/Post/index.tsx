import { POST_TYPES } from "@constants";
import { useQuery } from "@apollo/client";
import { Post } from "@components/Post";
import { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_POST_BY_URL } from "@graphql/post";
import { useRouter } from "next/router";

export function PostContainer() {
  const { query } = useRouter();
  const url = query.postUrl as string;
  const { data } = useQuery<GetPostByUrlQuery>(GET_POST_BY_URL, {
    variables: { url },
  });

  return data ? (
    <Post className="mb-14" post={data.getPostByUrl} type={POST_TYPES.PAGE} />
  ) : (
    <></>
  );
}
