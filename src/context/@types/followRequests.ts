import { Dispatch, SetStateAction } from "react";
import type { Connection } from "@t/connection";

export type FollowRequests = Connection[];

export type SetFollowRequests = {
  setFollowRequests: Dispatch<SetStateAction<FollowRequests>>;
};
