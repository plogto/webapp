import { Dispatch, SetStateAction } from "react";
import { User } from "@t/user";

declare global {
  export type AccountContext = {
    isAuthenticated: boolean;
    token?: string;
    user?: User;
  };

  export type SetAccountContext = {
    setIsAuthenticated: Dispatch<
      SetStateAction<AccountContext["isAuthenticated"]>
    >;
    setToken: Dispatch<SetStateAction<AccountContext["token"]>>;
    setUser: Dispatch<SetStateAction<AccountContext["user"]>>;
  };
}
