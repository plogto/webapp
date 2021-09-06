import { Dispatch, SetStateAction } from "react";
import { Connection } from "@/@types/connection";

export type FollowRequests = Connection[];

export type SetFollowRequests = {
  setFollowRequests: Dispatch<SetStateAction<FollowRequests>>;
};
