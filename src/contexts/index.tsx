import type { ReactNode } from "react";
import { AccountProvider } from "./AccountContext";
import { NotificationsProvider } from "./NotificationsContext";

interface Props {
  children: ReactNode;
}

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <NotificationsProvider>{children}</NotificationsProvider>
    </AccountProvider>
  );
}
