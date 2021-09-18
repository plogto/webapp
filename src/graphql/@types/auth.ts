import type { User } from "@t/user";

type AuthToken = {
  token: string;
  expiredAt: string;
};

export type LoginQuery = {
  login: {
    user: User;
    authToken: AuthToken;
  };
};
