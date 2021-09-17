import { Tag } from "@/@types/tag";

export type GetTagByTagNameQuery = {
  getTagByTagName: Tag;
};

export type GetTrendsQuery = {
  getTrends: {
    tags: Tag[];
  };
};
