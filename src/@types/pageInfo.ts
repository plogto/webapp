export interface PageInfo {
  endCursor?: string;
  hasNextPage?: boolean;
}

export interface PageInfoRequest {
  first?: number;
  after?: string;
}
