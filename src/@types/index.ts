import type { PageInfo } from "./pageInfo";

export interface Edge<T> {
  cursor: string;
  node: T;
}

export interface WithPageInfo<T> {
  totalCount?: number;
  edges: Edge<T>[];
  pageInfo: PageInfo;
}

declare global {
  const google: typeof import("google-one-tap");
}
