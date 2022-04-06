import { useMutation } from "@apollo/client";
import router from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { ADD_POST } from "@graphql/post";
import { useUploadFile } from "@hooks/useUploadFile";
import type { AddPostForm } from "../@types";
import type { AddPostMutation } from "@graphql/@types/post";

export function useAddPost() {
  const [addPost, { data, loading, error }] =
    useMutation<AddPostMutation>(ADD_POST);
  const [attachmentPreview, setAttachmentPreview] = useState<Blob>();
  const formMethods = useForm<AddPostForm>({
    mode: "all",
  });
  const { user } = useAccountContext();
  const { singleUploadFile } = useUploadFile();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const removeAttachmentPreview = useCallback(() => {
    setAttachmentPreview(undefined);
  }, []);

  const { setError, getValues } = formMethods;

  useEffect(() => {
    if (!getValues("content")?.length) {
      setError("content", {
        type: "required",
        message: "Required",
      });
    }
  }, [getValues, setError]);

  useEffect(() => {
    if (data?.addPost) {
      router.push(PageUrls.HOME);
    }
  }, [data]);

  const onSubmit = (variables: AddPostForm) => {
    if (!attachmentPreview) {
      addPost({
        variables,
      });
    } else {
      const file = new File([attachmentPreview], "file.png", {
        type: "image/png",
      });
      singleUploadFile({
        variables: { file },
      }).then(({ data }) => {
        addPost({
          variables: {
            ...variables,
            attachment: [data?.singleUploadFile.name],
          },
        });
      });
    }
  };

  return {
    user,
    formMethods,
    onSubmit,
    loading,
    error,
    attachmentPreview,
    setAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
  };
}
