import { Dispatch, SetStateAction } from "react";
import { Connection } from "@/@types/connection";
import { Pagination } from "@/@types/pagination";

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
