import type { MouseEventHandler, ReactNode } from "react";
import { ButtonLayout } from "@enums";

export interface ButtonProps {
  type?: "button" | "submit";
  layout?: ButtonLayout;
  className?: string;
  loadingClassName?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
