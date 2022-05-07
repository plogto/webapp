import type { User } from "@t/user";

export interface AuthToken {
  token: string;
  expiredAt: string;
}

export interface LoginQuery {
  login: {
    user: User;
    authToken: AuthToken;
  };
}

export interface RegisterMutation {
  register: {
    user: User;
    authToken: AuthToken;
  };
}
