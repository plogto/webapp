import type { PostsWithPageInfo } from "@t/post";
import type { Status } from "@t/status";

export interface PostsProps {
  posts?: PostsWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Status;
}
