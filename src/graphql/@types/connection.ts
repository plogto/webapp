import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";

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

export type GetFollowRequestsQuery = {
  getFollowRequests: {
    connections: Connection[];
    pagination: Pagination;
  };
};

export type GetFollowingByUsernameQuery = {
  getFollowingByUsername: {
    connections: Connection[];
    pagination: Pagination;
  };
};

export type GetFollowersByUsernameQuery = {
  getFollowersByUsername: {
    connections: Connection[];
    pagination: Pagination;
  };
};
