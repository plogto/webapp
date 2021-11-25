import { UseFormReturn } from "react-hook-form";
import type { User } from "@t/user";

export type SettingsForm = {
  username: User["username"];
  fullName: User["fullName"];
  email: User["email"];
  isPrivate: User["isPrivate"];
};

export type SettingsProps = {
  formMethods: UseFormReturn<SettingsForm>;
};

export type UseEditUser = {
  user?: User;
};
