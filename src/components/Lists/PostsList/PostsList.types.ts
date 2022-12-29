import type { Placeholder } from "@t/placeholder";
import type { PostsWithPageInfo } from "@t/post";

export interface PostsListProps {
  data?: PostsWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
}
