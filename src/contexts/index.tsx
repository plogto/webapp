import { AccountProvider } from "./AccountContext";
import { ModalProvider } from "./ModalContext";
import { NotificationsProvider } from "./NotificationsContext";
import { ProfileProvider } from "./ProfileContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <NotificationsProvider>
        <ModalProvider>
          <ProfileProvider>{children}</ProfileProvider>
        </ModalProvider>
      </NotificationsProvider>
    </AccountProvider>
  );
}
