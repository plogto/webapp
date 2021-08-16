import { Dispatch, SetStateAction } from "react";
import { User } from "./user";

export type Account = {
  isAuthenticated: boolean;
  token?: string;
  user?: User;
};

export type SetAccount = {
  setIsAutheticated: Dispatch<SetStateAction<Account["isAuthenticated"]>>;
  setToken: Dispatch<SetStateAction<Account["token"]>>;
  setUser: Dispatch<SetStateAction<Account["user"]>>;
};
