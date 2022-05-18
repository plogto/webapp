import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useSavedPostsContext } from "@contexts/SavedPostsContext";
import { getSavedPostsQuery } from "@graphql/@types/post";
import { GET_SAVED_POSTS } from "@graphql/post";

export function useSaved() {
  const { data } = useQuery<getSavedPostsQuery>(GET_SAVED_POSTS);
  const { savedPosts, setSavedPosts } = useSavedPostsContext();

  useEffect(() => {
    if (data) {
      const { posts } = data.getSavedPosts;
      setSavedPosts(posts);
    }
  }, [data, setSavedPosts]);

  return { savedPosts };
}
