import type { User } from "@t/user";

export interface UseInitThemesProps {
  user?: User;
}
export interface UseAuthenticationProps {
  setUser: SetAccountContext["setUser"];
}
