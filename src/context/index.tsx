import type { ReactNode } from "react";
import { AccountProvider } from "./AccountContext";
import { ProfileProvider } from "./ProfileContext";

type Props = {
  children: ReactNode;
};

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </AccountProvider>
  );
}
