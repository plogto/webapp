import type { MouseEventHandler, ReactNode } from "react";

export type ButtonProps = {
  type?: "button" | "submit";
  className?: string;
  loadingClassName?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
