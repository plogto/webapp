import type { ReactNode } from "react";

export type LinkButtonProps = {
  layout?: "outline" | "remove" | "apply";
  href: string;
  className?: string;
  children?: ReactNode;
};
