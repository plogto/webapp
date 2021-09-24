import { UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  type: "text" | "password";
  name: string;
  label?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
};
