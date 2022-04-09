import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Post } from "@components/Post";
import { POST_TYPES } from "@constants";
import { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_POST_BY_URL } from "@graphql/post";

export function PostContainer() {
  const router = useRouter();
  const url = router.query.postUrl as string;
  const { data } = useQuery<GetPostByUrlQuery>(GET_POST_BY_URL, {
    variables: { url },
  });

  return data ? (
    <Post className="mb-14" post={data.getPostByUrl} type={POST_TYPES.PAGE} />
  ) : (
    <></>
  );
}
