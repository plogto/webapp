import type { ReactNode } from "react";
import AccountProvider from "./AccountContext";
import UserProfileProvider from "./UserProfileContext";

type Props = {
  children: ReactNode;
};

function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <UserProfileProvider>{children}</UserProfileProvider>
    </AccountProvider>
  );
}

export default AppContext;
