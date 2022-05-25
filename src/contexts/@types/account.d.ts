import type { Dispatch, SetStateAction } from "react";
import type { User } from "@t/user";

declare global {
  export interface AccountContext {
    isAuthenticated: boolean;
    token?: string;
    user?: User;
  }

  export interface SetAccountContext {
    setIsAuthenticated: Dispatch<
      SetStateAction<AccountContext["isAuthenticated"]>
    >;
    setToken: Dispatch<SetStateAction<AccountContext["token"]>>;
    setUser: Dispatch<SetStateAction<AccountContext["user"]>>;
  }
}
