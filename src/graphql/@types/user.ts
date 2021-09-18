import type { User } from "@t/user";

export type GetUserInfoQuery = {
  getUserInfo: User;
};

export type GetUserByUsernameQuery = {
  getUserByUsername: User;
};
