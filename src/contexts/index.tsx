import { AccountProvider } from "./AccountContext";
import { ModalProvider } from "./ModalContext";
import { NotificationsProvider } from "./NotificationsContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <NotificationsProvider>
        <ModalProvider>{children}</ModalProvider>
      </NotificationsProvider>
    </AccountProvider>
  );
}
