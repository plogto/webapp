import type { Connection, ConnectionsWithPageInfo } from "@t/connection";

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
  getFollowRequests: ConnectionsWithPageInfo;
}

export interface GetFollowingByUsernameQuery {
  getFollowingByUsername: ConnectionsWithPageInfo;
}
export interface GetFollowingByUsernameQueryRequest {
  username: string;
}

export interface GetFollowersByUsernameQuery {
  getFollowersByUsername: ConnectionsWithPageInfo;
}

export interface GetFollowersByUsernameQueryRequest {
  username: string;
}
