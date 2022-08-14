import type { WithPageInfo } from ".";

export interface Tag {
  id: string;
  name: string;
  count: number;
  createdAt: string;
  updatedAt: string;
}

export type TagsWithPageInfo = WithPageInfo<Tag>;
