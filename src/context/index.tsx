import type { ReactNode } from "react";
import AccountProvider from "./AccountContext";
import ProfileProvider from "./ProfileContext";

type Props = {
  children: ReactNode;
};

function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </AccountProvider>
  );
}

export default AppContext;
