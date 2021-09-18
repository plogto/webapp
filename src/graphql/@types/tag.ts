import type { Tag } from "@t/tag";

export type GetTagByTagNameQuery = {
  getTagByTagName: Tag;
};

export type GetTrendsQuery = {
  getTrends: {
    tags: Tag[];
  };
};
