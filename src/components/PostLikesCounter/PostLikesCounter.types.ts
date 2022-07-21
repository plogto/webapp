import type { Post } from "@t/post";
import type { DateSize } from "@t/size";

export interface PostLikesCounterProps {
  size?: DateSize;
  likes: Post["likes"];
}