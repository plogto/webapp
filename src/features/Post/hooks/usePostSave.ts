import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { usePostContext } from "@contexts/PostContext";
import { SAVE_POST, UNSAVE_POST } from "@graphql/postSave";
import type {
  SavePostMutation,
  UnsavePostMutation,
} from "@graphql/@types/postSave";

export function usePostSave() {
  const [savePostMutation, savePostResponse] =
    useMutation<SavePostMutation>(SAVE_POST);
  const [unsavePostMutation, unsavePostResponse] =
    useMutation<UnsavePostMutation>(UNSAVE_POST);

  const { savePostContext, unsavePostContext } = usePostContext();

  useEffect(() => {
    if (savePostResponse.data) {
      savePostContext({ isSaved: savePostResponse.data.savePost });
    }
  }, [savePostContext, savePostResponse.data]);

  useEffect(() => {
    if (unsavePostResponse.data) {
      unsavePostContext({
        isSaved: unsavePostResponse.data.unsavePost,
      });
    }
  }, [unsavePostContext, unsavePostResponse.data]);

  const savePost = useCallback(
    (postId: string) => {
      savePostMutation({
        variables: {
          postId,
        },
      });
    },
    [savePostMutation],
  );

  const unsavePost = useCallback(
    (postId: string) => {
      unsavePostMutation({
        variables: {
          postId,
        },
      });
    },
    [unsavePostMutation],
  );

  return { savePost, unsavePost };
}
