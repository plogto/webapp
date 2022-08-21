import type { Dispatch, SetStateAction } from "react";
import type { ConnectionsWithPageInfo } from "@t/connection";

declare global {
  export interface ConnectionsContext {
    followers?: ConnectionsWithPageInfo;
    following?: ConnectionsWithPageInfo;
  }

  export interface SetConnectionsContext {
    setFollowers: Dispatch<SetStateAction<ConnectionsContext["followers"]>>;
    setFollowing: Dispatch<SetStateAction<ConnectionsContext["following"]>>;
  }
}
