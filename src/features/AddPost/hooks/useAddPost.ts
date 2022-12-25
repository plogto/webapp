import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { EditorState } from "draft-js";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { createEditorStateWithText } from "@draft-js-plugins/editor";
import type {
  AddPostMutation,
  AddPostMutationRequest,
} from "@graphql/@types/post";
import {
  ADD_POST,
  GET_EXPLORE_POSTS,
  GET_POSTS_BY_USERNAME,
  GET_POST_BY_URL,
  GET_TIMELINE_POSTS,
} from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import { useNavigator } from "@hooks/useNavigator";
import { usePost } from "@hooks/usePost";
import { useSuggestions } from "@hooks/useSuggestions";
import { useUploadFiles } from "@hooks/useUploadFiles";
import { useUrls } from "@hooks/useUrls";
import type { AddPostForm, UseAddPostProps } from "../AddPost.types";
import { useEditPost } from "./useEditPost";
import { useParentPost } from "./useParentPost";
import cloneDeep from "lodash/cloneDeep";
import isEmpty from "lodash/isEmpty";

export function useAddPost(props: UseAddPostProps) {
  const { isEditMode } = props;
  const { push } = useRouter();
  const { getFileUrl } = useUrls();
  const { user } = useAccountContext();
  const [addPost, { data, loading, error }] = useMutation<
    AddPostMutation,
    AddPostMutationRequest
  >(ADD_POST);
  const { handleCompleteSuggestion } = useSuggestions();

  const [attachmentPreviews, setAttachmentPreviews] = useState<Blob[]>([]);
  const { uploadFiles, uploadFilesResponse } = useUploadFiles();
  const { parentPost } = useParentPost();
  const { post } = usePost();
  const formMethods = useForm<AddPostForm>({
    mode: "all",
    defaultValues: {
      content: createEditorStateWithText(post?.content || ""),
    },
  });
  const { getValues, setValue } = formMethods;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { formatPostPageRoute, formatProfilePageRoute } = useNavigator();
  const { t } = useTranslation("addPost");

  const addAttachmentPreview = useCallback(
    (file?: Blob) =>
      file && setAttachmentPreviews(attachmentPreviews?.concat(file)),
    [attachmentPreviews],
  );

  const removeAttachmentPreview = useCallback(
    (index: number) => {
      const temp = cloneDeep(attachmentPreviews);
      temp?.splice(index, 1);
      setAttachmentPreviews(temp);
    },
    [attachmentPreviews],
  );

  const refetchQueries = useMemo(
    () => [
      {
        query: GET_EXPLORE_POSTS,
      },
      {
        query: GET_TIMELINE_POSTS,
      },
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
          setValue("content", createEditorStateWithText(post.content));
        }
        if (post?.attachment) {
          Promise.all(
            post.attachment?.map(file =>
              fetch(getFileUrl(file.name))
                .then(res => res.blob())
                .then(blob => blob),
            ),
          ).then(images => setAttachmentPreviews(images));
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify({ post, user })]);

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
    () => loading || uploadFilesResponse?.loading,
    [loading, uploadFilesResponse?.loading],
  );

  const handleAddPost = useCallback(
    (variables: AddPostForm) => {
      const content = variables.content?.getCurrentContent().getPlainText();
      if (isEmpty(attachmentPreviews)) {
        addPost({
          variables: {
            ...variables,
            content,
          },
          refetchQueries,
        });
      } else {
        const files: Blob[] = [];

        Promise.all(
          attachmentPreviews.map(attachmentPreview => {
            files.push(
              new File([attachmentPreview], "file.png", {
                type: "image/png",
              }),
            );
          }),
        );

        toast.promise(
          uploadFiles({
            variables: { files },
          }).then(({ data }) => {
            addPost({
              variables: {
                ...variables,
                attachment: data?.uploadFiles?.map(({ id }) => id) || [],
                content,
              },
              refetchQueries,
            });
          }),
          {
            loading: t("toasts.uploadingPost"),
            success: t("toasts.postUploaded"),
            error: t("toasts.somethingWentWrong"),
          },
        );
      }
    },
    [addPost, attachmentPreviews, refetchQueries, t, uploadFiles],
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

  const handleClickOnSuggestionItem = (value: string) => {
    const { newEditorState, forceSelection } = handleCompleteSuggestion({
      editorState: getValues("content"),
      value,
    });
    setValue(
      "content",
      EditorState.forceSelection(newEditorState, forceSelection),
    );
  };

  return {
    handleClickOnSuggestionItem,
    buttonTitle,
    isLoading,
    parentPost,
    user,
    formMethods,
    onSubmit,
    error,
    attachmentPreviews,
    setAttachmentPreviews,
    addAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
  };
}
