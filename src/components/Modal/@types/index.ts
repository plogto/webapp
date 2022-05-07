import { ReactNode } from "react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  contentClassName?: string;
}

export interface DeleteModalProps {
  title: string;
  description: string;
  onDelete: () => void;
  isOpen: boolean;
}
