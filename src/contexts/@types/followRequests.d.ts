import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";

declare global {
  export type FollowRequestsContext = Connection[];

  export interface SetFollowRequestsContext {
    setFollowRequests: Dispatch<SetStateAction<FollowRequestsContext>>;
  }
}
