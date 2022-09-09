import type { User } from "@t/user";
import type { AuthToken } from "./auth";

export interface GetUserByInvitationCodeQuery {
  getUserByInvitationCode: User;
}

export interface GetUserByInvitationCodeQueryRequest {
  invitationCode: string;
}

export interface GetUserInfoQuery {
  getUserInfo: User;
}

export interface CheckUsernameQuery {
  checkUsername: User;
}

export interface CheckEmailQuery {
  checkEmail: User;
}

export interface GetUserByUsernameQuery {
  getUserByUsername: User;
}
export interface GetUserByUsernameQueryRequest {
  username: User["username"];
}

export interface EditUserMutation {
  editUser: User;
}

export interface ChangePasswordMutation {
  user: User;
  authToken: AuthToken;
}
