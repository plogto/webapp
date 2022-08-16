import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import type { SavePostMutation } from "@graphql/@types/savedPost";
import { GET_SAVED_POSTS } from "@graphql/post";
import { SAVE_POST } from "@graphql/savedPost";
import type { UseSavePostProps } from "../Post.types";

export function useSavePost(props: UseSavePostProps) {
  const { postId } = props;
  const [savePostMutation] = useMutation<SavePostMutation>(SAVE_POST);

  const savePost = useCallback(() => {
    savePostMutation({
      variables: { postId },
      refetchQueries: [{ query: GET_SAVED_POSTS }],
    });
  }, [postId, savePostMutation]);

  return { savePost };
}
