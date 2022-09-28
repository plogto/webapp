import type { PostsWithPageInfo, PostType } from "@t/post";

export interface RepliesProps {
  type: PostType;
  replies?: PostsWithPageInfo;
  isThread?: boolean;
}
