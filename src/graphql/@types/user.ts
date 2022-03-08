import type { AuthToken } from "./auth";
import type { User } from "@t/user";

export type GetUserInfoQuery = {
  getUserInfo: User;
};

export type CheckUsernameQuery = {
  checkUsername: User;
};

export type CheckEmailQuery = {
  checkEmail: User;
};

export type GetUserByUsernameQuery = {
  getUserByUsername: User;
};

export type EditUserMutation = {
  editUser: User;
};

export type ChangePasswordMutation = {
  user: User;
  authToken: AuthToken;
};
