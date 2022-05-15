import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  AddPostMutation,
  AddPostMutationRequest,
} from "@graphql/@types/post";
import {
  ADD_POST,
  GET_POSTS_BY_USERNAME,
  GET_POST_BY_URL,
} from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import { useNavigation } from "@hooks/useNavigation";
import { useUploadFile } from "@hooks/useUploadFile";
import type { AddPostForm } from "../@types";
import { useParentPost } from "./useParentPost";
import { useRouter } from "next/router";

export function useAddPost() {
  const { push } = useRouter();
  const { user } = useAccountContext();
  const [addPost, { data, loading, error }] = useMutation<
    AddPostMutation,
    AddPostMutationRequest
  >(ADD_POST);
  const [attachmentPreview, setAttachmentPreview] = useState<Blob>();
  const { singleUploadFile, singleUploadFileResponse } = useUploadFile();
  const { parentPost } = useParentPost();
  const formMethods = useForm<AddPostForm>({
    mode: "all",
  });
  const { setValue } = formMethods;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { formatPostPageRoute, formatProfilePageRoute } = useNavigation();

  const removeAttachmentPreview = useCallback(() => {
    setAttachmentPreview(undefined);
  }, []);

  const { setError, getValues } = formMethods;

  const refetchQueries = useMemo(
    () => [
      {
        query: GET_TRENDS,
      },
      {
        query: GET_POSTS_BY_USERNAME,
        variables: { username: user?.username },
      },
      {
        query: GET_POST_BY_URL,
        variables: { url: parentPost?.url },
      },
    ],
    [parentPost?.url, user?.username],
  );

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
    if (data?.addPost && user) {
      if (parentPost) {
        push(formatPostPageRoute(parentPost.url));
      } else {
        push(formatProfilePageRoute(user?.username));
      }
    }
  }, [data, formatPostPageRoute, formatProfilePageRoute, parentPost, user]);

  const onSubmit = (variables: AddPostForm) => {
    if (!attachmentPreview) {
      addPost({
        variables,
        refetchQueries,
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
          refetchQueries,
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
