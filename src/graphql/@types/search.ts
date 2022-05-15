import type { SearchResult } from "@features/Search/@types";

export interface SearchQuery {
  search: SearchResult;
}

export interface SearchQueryRequest {
  expression: string;
}
