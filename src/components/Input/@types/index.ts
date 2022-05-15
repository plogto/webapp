import type { InputHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { IconNames } from "@components/Icon";

export type InputTypes = "text" | "password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  icon?: IconNames;
  label?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  messageType?: "error" | "success";
  message?: string;
}
