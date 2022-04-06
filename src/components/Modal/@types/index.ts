import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  contentClassName?: string;
};

export type DeleteModalProps = {
  title: string;
  description: string;
  onDelete: () => void;
};
