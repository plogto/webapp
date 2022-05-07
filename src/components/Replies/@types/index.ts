import type { PostsWithPagination, PostType } from "@t/post";

export interface RepliesProps {
  type: PostType;
  replies?: PostsWithPagination;
  isThread?: boolean;
}
