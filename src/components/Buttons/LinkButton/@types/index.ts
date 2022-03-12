import type { ReactNode } from "react";

export type LinkButtonProps = {
  layout?: "cancel" | "remove" | "apply";
  href: string;
  className?: string;
  children?: ReactNode;
};
