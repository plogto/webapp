import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
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
import { useNavigator } from "@hooks/useNavigator";
import { usePost } from "@hooks/usePost";
import { useUploadFile } from "@hooks/useUploadFile";
import { useUrls } from "@hooks/useUrls";
import type { AddPostForm, UseAddPostProps } from "../AddPost.types";
import { useEditPost } from "./useEditPost";
import { useParentPost } from "./useParentPost";

export function useAddPost(props: UseAddPostProps) {
  const { isEditMode } = props;
  const { push } = useRouter();
  const { getFileUrl } = useUrls();
  const { user } = useAccountContext();
  const [addPost, { data, loading, error }] = useMutation<
    AddPostMutation,
    AddPostMutationRequest
  >(ADD_POST);

  const [attachmentPreview, setAttachmentPreview] = useState<Blob>();
  const { singleUploadFile, singleUploadFileResponse } = useUploadFile();
  const { parentPost } = useParentPost();
  const { post } = usePost();
  const formMethods = useForm<AddPostForm>({
    mode: "all",
    defaultValues: {
      content: post?.content,
    },
  });
  const { setValue } = formMethods;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { formatPostPageRoute, formatProfilePageRoute } = useNavigator();
  const { t } = useTranslation("addPost");

  const removeAttachmentPreview = useCallback(() => {
    setAttachmentPreview(undefined);
  }, []);

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

  const { handleEditPost } = useEditPost({
    refetchQueries,
  });

  useEffect(() => {
    if (parentPost?.id) {
      setValue("parentId", parentPost.id);
    }
  }, [parentPost?.id, setValue]);

  useEffect(() => {
    if (post && user) {
      if (isEditMode && post?.user.id !== user?.id) {
        push(formatProfilePageRoute(user.username));
      } else {
        if (post?.content) {
          setValue("content", post.content);
        }

        if (post?.attachment) {
          fetch(getFileUrl(post.attachment[0].name))
            .then(res => res.blob())
            .then(blob => setAttachmentPreview(blob));
        }
      }
    }
  }, [post?.content, post?.user.id, user?.id]);

  useEffect(() => {
    if (data?.addPost && user) {
      if (parentPost) {
        push(formatPostPageRoute(parentPost.url));
      } else {
        push(formatProfilePageRoute(user?.username));
      }
    }
  }, [
    data,
    formatPostPageRoute,
    formatProfilePageRoute,
    parentPost,
    push,
    user,
  ]);

  const buttonTitle = useMemo(() => {
    if (isEditMode) {
      return t("buttons.editPost");
    }

    if (parentPost) {
      return t("buttons.reply");
    } else {
      return t("buttons.addPost");
    }
  }, [isEditMode, parentPost, t]);

  const isLoading = useMemo(
    () => loading || singleUploadFileResponse?.loading,
    [loading, singleUploadFileResponse?.loading],
  );

  const handleAddPost = useCallback(
    (variables: AddPostForm) => {
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
    },
    [addPost, attachmentPreview, refetchQueries, singleUploadFile],
  );

  const onSubmit = useCallback(
    (variables: AddPostForm) => {
      if (isEditMode) {
        return handleEditPost(variables);
      } else {
        return handleAddPost(variables);
      }
    },
    [isEditMode, handleAddPost, handleEditPost],
  );

  return {
    buttonTitle,
    isLoading,
    parentPost,
    user,
    formMethods,
    onSubmit,
    error,
    attachmentPreview,
    setAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
  };
}
