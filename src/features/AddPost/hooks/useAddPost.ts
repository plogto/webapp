import { useEffect } from "react";
import { useForm } from "react-hook-form";
import router from "next/router";
import { PageUrls } from "@/@enums/pages";
import { useAccount } from "@/context/AccountContext";
import { ADD_POST } from "@/graphql/post";
import { useMutation } from "@apollo/client";
import type { AddPostForm } from "../@types";

export function useAddPost() {
  const [addPost, { data, loading, error }] = useMutation(ADD_POST);
  const formMethods = useForm<AddPostForm>({
    mode: "all",
  });
  const { user } = useAccount();

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

  const submit = (formData: AddPostForm) => {
    addPost({
      variables: {
        ...formData,
      },
    });
  };

  return { user, formMethods, submit, loading, error };
}
