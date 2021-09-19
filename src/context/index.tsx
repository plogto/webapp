import { AccountProvider } from "./AccountContext";
import { ProfileProvider } from "./ProfileContext";
import type { ReactNode } from "react";

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
