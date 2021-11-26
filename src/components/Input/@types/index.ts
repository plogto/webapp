import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputTypes = "text" | "password";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  messageType?: "error" | "success";
  message?: string;
}
