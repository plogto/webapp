import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";

type ConnectionAndPagination = {
  connections?: Connection[];
  pagination?: Pagination;
};

export type Connections = {
  followers: ConnectionAndPagination;
  following: ConnectionAndPagination;
};

export type SetConnections = {
  setFollowers: Dispatch<SetStateAction<ConnectionAndPagination>>;
  setFollowing: Dispatch<SetStateAction<ConnectionAndPagination>>;
};
