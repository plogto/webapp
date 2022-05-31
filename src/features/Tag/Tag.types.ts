import type { Status } from "@t/status";
import type { Tag } from "@t/tag";

export interface Tab {
  title: string;
  href: string;
  data: PostData;
  getMoreData: () => void;
  emptyStatus: Status;
}

export interface TagInfoProps {
  tag: Tag;
}

export interface TagContentProps {
  tabs: Tab[];
}
