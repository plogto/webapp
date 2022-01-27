import { AccountProvider } from "./AccountContext";
import { ModalProvider } from "./ModalContext";
import { ProfileProvider } from "./ProfileContext";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AppContext({ children }: Props) {
  return (
    <AccountProvider>
      <ModalProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </ModalProvider>
    </AccountProvider>
  );
}
