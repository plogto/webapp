import type { ReactNode } from "react";

export interface PageHeaderProps {
  title?: ReactNode;
  rightSide?: ReactNode;
  className?: string;
  backLink?: string;
}

export interface UsePageHeaderProps {
  backLink?: string;
}
