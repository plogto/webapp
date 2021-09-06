export type User = {
  id: string;
  username: string;
  fullname: string;
  email: string;
  private?: boolean;
  connectionStatus: number;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  followRequestsCount?: number;
  createdAt: string;
  updatedAt: string;
};
