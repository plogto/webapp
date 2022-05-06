import type { User } from "@t/user";

export type AuthToken = {
  token: string;
  expiredAt: string;
};

export type LoginQuery = {
  login: {
    user: User;
    authToken: AuthToken;
  };
};

export type RegisterMutation = {
  register: {
    user: User;
    authToken: AuthToken;
  };
};
