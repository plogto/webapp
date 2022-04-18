import { useMutation } from "@apollo/client";
import router from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParentPost } from "./useParentPost";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { ADD_POST, GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import { useUploadFile } from "@hooks/useUploadFile";
import type { AddPostForm } from "../@types";
import type {
  AddPostMutation,
  AddPostMutationRequest,
} from "@graphql/@types/post";

export function useAddPost() {
  const { user } = useAccountContext();

  const [addPost, { data, loading, error }] = useMutation<
    AddPostMutation,
    AddPostMutationRequest
  >(ADD_POST, {
    refetchQueries: [
      {
        query: GET_TRENDS,
      },
      {
        query: GET_POSTS_BY_USERNAME,
        variables: { username: user?.username },
      },
    ],
  });
  const [attachmentPreview, setAttachmentPreview] = useState<Blob>();
  const { singleUploadFile, singleUploadFileResponse } = useUploadFile();
  const { parentPost } = useParentPost();
  const formMethods = useForm<AddPostForm>({
    mode: "all",
  });
  const { setValue } = formMethods;
  const inputFileRef = useRef<HTMLInputElement>(null);

  const removeAttachmentPreview = useCallback(() => {
    setAttachmentPreview(undefined);
  }, []);

  const { setError, getValues } = formMethods;

  useEffect(() => {
    if (parentPost?.id) {
      setValue("postId", parentPost.id);
    }
  }, [parentPost?.id, setValue]);

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
            attachment: data?.singleUploadFile?.id
              ? [data.singleUploadFile.id]
              : [],
          },
        });
      });
    }
  };

  return {
    parentPost,
    user,
    formMethods,
    onSubmit,
    loading,
    uploadFileLoading: singleUploadFileResponse.loading,
    error,
    attachmentPreview,
    setAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
  };
}
