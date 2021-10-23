import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAddComment } from "./useAddComment";
import { useComment } from "./useComment";
import { usePostContext } from "@context/PostContext";
import { GetPostByUrlQuery } from "@graphql/@types/post";
import { GET_POST_BY_URL } from "@graphql/post";
import { usePostLike, usePostSave } from ".";

export function usePost() {
  const router = useRouter();
  const { post, setPost } = usePostContext();
  const url = router.query.postUrl as string;
  const [getPostByUrl, getPostByUrlResponse] =
    useLazyQuery<GetPostByUrlQuery>(GET_POST_BY_URL);

  const { isLiked, likePost, unlikePost } = usePostLike({
    id: post?.id,
    isLiked: post?.isLiked,
  });
  const { isSaved, savePost, unsavePost } = usePostSave({
    id: post?.id,
    isSaved: post?.isSaved,
  });

  const addComment = useAddComment({
    id: post?.id,
  });

  const { onReply } = useComment();

  useEffect(() => {
    if (url) {
      getPostByUrl({ variables: { url } });
    }
  }, [url]);

  useEffect(() => {
    if (getPostByUrlResponse.data) {
      setPost(getPostByUrlResponse.data.getPostByUrl);
    }
  }, [getPostByUrlResponse]);

  return {
    post,
    isLiked,
    likePost,
    unlikePost,
    isSaved,
    savePost,
    unsavePost,
    addComment,
    onReply,
  };
}
