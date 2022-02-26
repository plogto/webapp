import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { SAVE_POST } from "@graphql/postSave";
import type { UsePostSaveProps } from "../@types";
import type { SavePostMutation } from "@graphql/@types/postSave";

export function usePostSave(props: UsePostSaveProps) {
  const { id } = props;
  const [savePostMutation] = useMutation<SavePostMutation>(SAVE_POST);

  const savePost = useCallback(() => {
    savePostMutation({
      variables: { postId: id },
    });
  }, [id, savePostMutation]);

  return { savePost };
}
