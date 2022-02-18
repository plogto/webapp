import type { ActionsPostProps } from "@components/Post/@types";
import type { PostsWithPagination, PostType } from "@t/post";

export type RepliesProps = {
  type: PostType;
  replies?: PostsWithPagination;
  actions?: ActionsPostProps;
};
