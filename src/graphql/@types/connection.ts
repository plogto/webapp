import type { Connection } from "@/@types/connection";
import { Pagination } from "@/@types/pagination";

export type FollowUserMutation = {
  followUser: Connection;
};

export type UnfollowUserMutation = {
  unfollowUser: Connection;
};

export type AcceptUserMutation = {
  acceptUser: Connection;
};

export type RejectUserMutation = {
  rejectUser: Connection;
};

export type GetUserFollowRequestsQuery = {
  getUserFollowRequests: {
    connections: Connection[];
    pagination: Pagination;
  };
};
