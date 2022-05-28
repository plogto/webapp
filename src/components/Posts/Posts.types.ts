import type { Pagination } from "@t/pagination";
import type { Post } from "@t/post";

export interface PostsProps {
  posts?: Post[];
  className?: string;
  isLoading?: boolean;
  pagination?: Pagination;
  getMoreData: () => void;
}
