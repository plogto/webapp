import type { Tab } from "@t/post";
import type { Tag } from "@t/tag";

export interface TagInfoProps {
  tag: Tag;
}

export interface TagContentProps {
  tabs: Tab[];
}
