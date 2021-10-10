import { useMutation } from "@apollo/client";
import router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { AddPostMutation } from "@graphql/@types/post";
import { ADD_POST } from "@graphql/post";

import type { AddPostForm } from "../@types";

export function useAddPost() {
  const [addPost, { data, loading, error }] =
    useMutation<AddPostMutation>(ADD_POST);
  const formMethods = useForm<AddPostForm>({
    mode: "all",
  });
  const { user } = useAccountContext();

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

  const onSubmit = (formData: AddPostForm) => {
    addPost({
      variables: {
        ...formData,
      },
    });
  };

  return { user, formMethods, onSubmit, loading, error };
}
