import type { TextareaHTMLAttributes } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  messageType?: "error" | "success";
  message?: string;
}
