import type { Tag } from "@t/tag";

export interface GetTagByTagNameQuery {
  getTagByTagName: Tag;
}
export interface GetTagByTagNameQueryRequest {
  tagName: string;
}

export interface GetTrendsQuery {
  getTrends: {
    tags: Tag[];
  };
}
export interface GetTrendsQueryRequest {
  limit: number;
}
