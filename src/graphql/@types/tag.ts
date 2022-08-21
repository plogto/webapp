import type { Tag, TagsWithPageInfo } from "@t/tag";

export interface GetTagByTagNameQuery {
  getTagByTagName: Tag;
}
export interface GetTagByTagNameQueryRequest {
  tagName: string;
}

export interface GetTrendsQuery {
  getTrends: TagsWithPageInfo;
}
export interface GetTrendsQueryRequest {
  limit: number;
}
