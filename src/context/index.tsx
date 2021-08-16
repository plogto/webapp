import { ReactNode } from "react";
import AccountProvider from "./AccountContext";

type Props = {
  children: ReactNode;
};

function AppContext({ children }: Props) {
  return <AccountProvider>{children}</AccountProvider>;
}

export default AppContext;
