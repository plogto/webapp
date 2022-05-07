import type { ReactNode } from "react";

export interface LinkButtonProps {
  layout?: "outline" | "remove" | "apply";
  href: string;
  className?: string;
  children?: ReactNode;
}
