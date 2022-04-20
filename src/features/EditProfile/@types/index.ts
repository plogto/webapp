import {
  UseFormClearErrors,
  UseFormReturn,
  UseFormSetError,
} from "react-hook-form";
import { Attachment } from "@t/attachment";
import type { User } from "@t/user";

export type SettingsForm = {
  username: User["username"];
  avatar?: Attachment["id"];
  background?: Attachment["id"];
  fullName: User["fullName"];
  email: User["email"];
  bio: User["bio"];
  isPrivate: User["isPrivate"];
};

export type SettingsProps = {
  formMethods: UseFormReturn<SettingsForm>;
};

export type UseEditUser = {
  user?: User;
};

export type UseEditUserValidations = {
  setError: UseFormSetError<SettingsForm>;
  clearErrors: UseFormClearErrors<SettingsForm>;
};