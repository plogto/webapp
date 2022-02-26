import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
};

export type DeleteModalProps = {
  title: string;
  description: string;
  onDelete: () => void;
};
