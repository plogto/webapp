import type { PostsWithPagination, PostType } from "@t/post";

export type RepliesProps = {
  type: PostType;
  replies?: PostsWithPagination;
  isThread?: boolean;
};
