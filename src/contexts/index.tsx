import { AccountProvider } from "./AccountContext";
import { NotificationsProvider } from "./NotificationsContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <NotificationsProvider>{children}</NotificationsProvider>
    </AccountProvider>
  );
}
