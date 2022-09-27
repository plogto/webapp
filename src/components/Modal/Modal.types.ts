import type { ReactNode } from "react";
import { ConfirmationModalType } from "@enums";
import type { IconNames } from "@components/Icon";

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
export interface ConfirmationModalProps {
  title: string;
  description: string;
  icon: IconNames;
  onSubmit: () => void;
  type?: ConfirmationModalType;
  submitTitle: string;
  isOpen?: boolean;
}
