import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";

declare global {
  export type FollowRequestsContext = Connection[];

  export type SetFollowRequestsContext = {
    setFollowRequests: Dispatch<SetStateAction<FollowRequestsContext>>;
  };
}
