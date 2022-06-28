import type { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  type?: "button" | "submit";
  layout?: "outline" | "remove" | "apply";
  className?: string;
  loadingClassName?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
