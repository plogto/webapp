import type { Pagination } from "@t/pagination";
import type { Post } from "@t/post";
import { Status } from "@t/status";

export interface PostsProps {
  posts?: Post[];
  scrollableTarget: string;
  className?: string;
  isLoading?: boolean;
  pagination?: Pagination;
  getMoreData: () => void;
  emptyStatus: Status;
}
