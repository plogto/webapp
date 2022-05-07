import type { Post } from "@t/post";

// TODO: add loading prop
export interface PostsProps {
  posts?: Post[];
  className?: string;
}
