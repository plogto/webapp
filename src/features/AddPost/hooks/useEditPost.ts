import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  EditPostMutation,
  EditPostMutationRequest,
} from "@graphql/@types/post";
import { EDIT_POST } from "@graphql/post";
import { useNavigator } from "@hooks/useNavigator";
import { usePost } from "@hooks/usePost";
import type { AddPostForm, UseEditPostProps } from "../AddPost.types";
import { useParentPost } from "./useParentPost";

export function useEditPost(props: UseEditPostProps) {
  const { refetchQueries } = props;
  const { user } = useAccountContext();
  const { post } = usePost();
  const { parentPost } = useParentPost();

  const [editPost, { data, loading, error }] = useMutation<
    EditPostMutation,
    EditPostMutationRequest
  >(EDIT_POST);

  const { push } = useRouter();
  const { formatPostPageRoute } = useNavigator();

  useEffect(() => {
    if (data?.editPost && user) {
      push(formatPostPageRoute(data.editPost.url));
    }
  }, [data?.editPost, formatPostPageRoute, push, user]);

  const handleEditPost = (variables: AddPostForm) => {
    const { content } = variables;
    if (post) {
      editPost({
        variables: {
          postId: post?.id,
          content: content?.getCurrentContent().getPlainText(),
        },
        refetchQueries,
      });
    }
  };

  return {
    parentPost,
    user,
    handleEditPost,
    loading,
    error,
  };
}
