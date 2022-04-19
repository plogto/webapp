import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useAccountContext } from "@contexts/AccountContext";
import { DELETE_POST, GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import { useNavigation } from "@hooks/useNavigation";
import type { UseDeletePostProps } from "../@types";
import type { DeletePostMutation } from "@graphql/@types/post";

export function useDeletePost(props: UseDeletePostProps) {
  const { postId } = props;
  const { push } = useRouter();
  const { formatProfilePageRoute } = useNavigation();
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
