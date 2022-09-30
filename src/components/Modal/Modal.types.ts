import type { ReactNode } from "react";
import { ModalColor } from "@enums";
import type { IconNames } from "@components/Icon";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  contentClassName?: string;
  onClose: () => void;
}

export interface DeletionModalProps {
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
  color?: ModalColor;
  submitButton: ReactNode;
  isOpen?: boolean;
}
export interface InformationModalProps {
  title: string;
  description: string;
  content?: ReactNode;
  color?: ModalColor;
  icon: IconNames;
  onSubmit: () => void;
  submitButton: ReactNode;
  isOpen?: boolean;
}
