import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";

declare global {
  export type ConnectionAndPagination = {
    connections?: Connection[];
    pagination?: Pagination;
  };

  export type ConnectionsContext = {
    followers?: ConnectionAndPagination;
    following?: ConnectionAndPagination;
  };

  export type SetConnectionsContext = {
    setFollowers: Dispatch<SetStateAction<ConnectionsContext["followers"]>>;
    setFollowing: Dispatch<SetStateAction<ConnectionsContext["following"]>>;
  };
}
