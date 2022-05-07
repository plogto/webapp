import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";

export interface FollowUserMutation {
  followUser: Connection;
}

export interface UnfollowUserMutation {
  unfollowUser: Connection;
}

export interface AcceptUserMutation {
  acceptUser: Connection;
}

export interface RejectUserMutation {
  rejectUser: Connection;
}

export interface GetFollowRequestsQuery {
  getFollowRequests: {
    connections: Connection[];
    pagination: Pagination;
  };
}

export interface GetFollowingByUsernameQuery {
  getFollowingByUsername: {
    connections: Connection[];
    pagination: Pagination;
  };
}

export interface GetFollowersByUsernameQuery {
  getFollowersByUsername: {
    connections: Connection[];
    pagination: Pagination;
  };
}
