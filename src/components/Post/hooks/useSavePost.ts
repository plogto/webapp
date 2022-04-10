import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { UseSavePostProps } from "../@types";
import { SAVE_POST } from "@graphql/postSave";
import type { SavePostMutation } from "@graphql/@types/postSave";

export function useSavePost(props: UseSavePostProps) {
  const { postId } = props;
  const [savePostMutation] = useMutation<SavePostMutation>(SAVE_POST);

  const savePost = useCallback(() => {
    savePostMutation({
      variables: { postId },
    });
  }, [postId, savePostMutation]);

  return { savePost };
}
