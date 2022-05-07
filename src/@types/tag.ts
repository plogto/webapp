import type { Pagination } from "./pagination";

export interface Tag {
  id: string;
  name: string;
  count: number;
  createdAt: string;
  updatedAt: string;
}

export interface TagsWithPagination {
  tags: Tag[];
  pagination: Pagination;
}
