import type { PostTab } from "@t/post";
import type { Tag } from "@t/tag";

export interface TagInfoProps {
  tag: Tag;
}

export interface TagContentProps {
  tabs: PostTab[];
}
