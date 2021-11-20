import { UseFormRegisterReturn } from "react-hook-form";

export type InputTypes = "text" | "password";

export type InputProps = {
  type: InputTypes;
  name: string;
  label: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
  status?: "normal" | "error" | "success";
  message?: string;
};
