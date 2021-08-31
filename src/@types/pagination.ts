export type Pagination = {
  limit: number;
  page: number;
  totalDocs: number;
  totalPages: number;
  nextPage?: number;
};
