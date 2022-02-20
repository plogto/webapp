import { usePostLike, usePostSave } from "./hooks";
import { Post } from "@components/Post";
import { POST_TYPES } from "@config";
import { usePostContext } from "@contexts/PostContext";

export function PostContainer() {
  const { post } = usePostContext();

  const { likePost, unlikePost } = usePostLike();
  const { savePost, unsavePost } = usePostSave();

  const actions = {
    likePost,
    unlikePost,
    savePost,
    unsavePost,
  };

  return post ? (
    <Post
      actions={actions}
      repliesActions={actions}
      className="mb-14"
      post={post}
      type={POST_TYPES.PAGE}
    />
  ) : (
    <></>
  );
}
