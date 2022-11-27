import { ReactNode } from "react";
import {
  UseFormClearErrors,
  UseFormReturn,
  UseFormSetError,
} from "react-hook-form";
import { Attachment } from "@t/attachment";
import type { User } from "@t/user";

export interface SettingsForm {
  username: User["username"];
  avatar?: Attachment["id"];
  background?: Attachment["id"];
  fullName: User["fullName"];
  email: User["email"];
  bio: User["bio"];
  isPrivate: User["isPrivate"];
}

export interface SettingsProps {
  formMethods: UseFormReturn<SettingsForm>;
}

export interface ChangeUsernameForm {
  username: User["username"];
}

export interface ChangeUsernameProps {
  username: User["username"];
  isOpen?: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export interface UseChangeUsernameProps {
  closeModal: () => void;
}

export interface UseEditUser {
  user?: User;
}

export interface ModalPortalProps {
  children: ReactNode;
}

export interface UseEditUserValidations {
  setError: UseFormSetError<SettingsForm>;
  clearErrors: UseFormClearErrors<SettingsForm>;
}
