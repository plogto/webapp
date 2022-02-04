import type { Pagination } from "./pagination";

export type Tag = {
  id: string;
  name: string;
  count: number;
  createdAt: string;
  updatedAt: string;
};

export type TagsWithPagination = {
  tags: Tag[];
  pagination: Pagination;
};
