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
export interface ChangeUsernameModalProps {
  title: string;
  description?: string;
  closeModal: () => void;
  isSubmitDisabled?: boolean;
  isOpen?: boolean;
  children: ReactNode;
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

export interface ListModalProps {
  title: string;
  children?: ReactNode;
  closeButton: ReactNode;
  isOpen?: boolean;
}
