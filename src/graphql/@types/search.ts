import type { SearchResult } from "@features/Search/Search.types";

export interface SearchQuery {
  search: SearchResult;
}

export interface SearchQueryRequest {
  expression: string;
}
