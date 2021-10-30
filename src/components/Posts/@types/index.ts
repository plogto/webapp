import type { Post } from "@t/post";

// TODO: add loading prop
export type PostsProps = {
  posts?: Post[];
  className?: string;
};
