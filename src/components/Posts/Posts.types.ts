import type { Placeholder } from "@t/placeholder";
import type { PostsWithPageInfo } from "@t/post";

export interface PostsProps {
  posts?: PostsWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
