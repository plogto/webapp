import { useCallback, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type { DeletePostMutation } from "@graphql/@types/post";
import { DELETE_POST, GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import { useNavigator } from "@hooks/useNavigator";
import type { UseDeletePostProps } from "../@types";
import { useRouter } from "next/router";

export function useDeletePost(props: UseDeletePostProps) {
  const { postId } = props;
  const { push } = useRouter();
  const { formatProfilePageRoute } = useNavigator();
  const { user } = useAccountContext();
  const [deletePostMutation, { data }] =
    useMutation<DeletePostMutation>(DELETE_POST);

  useEffect(() => {
    if (data?.deletePost && user) {
      push(formatProfilePageRoute(user.username));
    }
  }, [data, formatProfilePageRoute, push, user]);

  const deletePost = useCallback(() => {
    deletePostMutation({
      variables: { postId },
      refetchQueries: [
        { query: GET_TRENDS },
        {
          query: GET_POSTS_BY_USERNAME,
          variables: { username: user?.username },
        },
      ],
    });
  }, [deletePostMutation, postId, user?.username]);

  return { deletePost };
}
