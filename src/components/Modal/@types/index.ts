import { ReactNode } from "@reach/router/node_modules/@types/react";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export type DeleteModalProps = {
  onDelete: () => void;
};
