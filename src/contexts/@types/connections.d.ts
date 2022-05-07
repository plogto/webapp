import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";

declare global {
  export interface ConnectionAndPagination {
    connections?: Connection[];
    pagination?: Pagination;
  }

  export interface ConnectionsContext {
    followers?: ConnectionAndPagination;
    following?: ConnectionAndPagination;
  }

  export interface SetConnectionsContext {
    setFollowers: Dispatch<SetStateAction<ConnectionsContext["followers"]>>;
    setFollowing: Dispatch<SetStateAction<ConnectionsContext["following"]>>;
  }
}
