import type { Dispatch, SetStateAction } from "react";
import type { User } from "@t/user";

declare global {
  export interface AccountContext {
    isAuthenticated: boolean;
    token?: string;
    user?: User;
    isUserLoading?: boolean;
  }

  export interface SetAccountContext {
    setIsAuthenticated: Dispatch<
      SetStateAction<AccountContext["isAuthenticated"]>
    >;
    setToken: Dispatch<SetStateAction<AccountContext["token"]>>;
    setUser: Dispatch<SetStateAction<AccountContext["user"]>>;
    setIsUserLoading: Dispatch<SetStateAction<AccountContext["boolean"]>>;
  }
}
