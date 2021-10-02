import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { UsePostSaveProps } from "../@types";
import { SavePostMutation, UnsavePostMutation } from "@graphql/@types/postSave";
import { SAVE_POST, UNSAVE_POST } from "@graphql/postSave";

export function usePostSave(props: UsePostSaveProps) {
  const { id, isSaved: initialIsSaved } = props;
  const [isSaved, setIsSaved] = useState<boolean>(!!initialIsSaved);
  const variables = { postId: id };

  const [savePostMutation, savePostResponse] =
    useMutation<SavePostMutation>(SAVE_POST);
  const [unsavePostMutation, unsavePostResponse] =
    useMutation<UnsavePostMutation>(UNSAVE_POST);

  useEffect(() => {
    if (savePostResponse.data) {
      setIsSaved(!!savePostResponse.data?.savePost);
    }
  }, [savePostResponse.data]);

  useEffect(() => {
    if (unsavePostResponse.data) {
      setIsSaved(!unsavePostResponse.data?.unsavePost);
    }
  }, [unsavePostResponse.data]);

  const savePost = useCallback(() => {
    savePostMutation({ variables });
  }, [id]);

  const unsavePost = useCallback(() => {
    unsavePostMutation({ variables });
  }, [id]);

  return { savePost, unsavePost, isSaved };
}
