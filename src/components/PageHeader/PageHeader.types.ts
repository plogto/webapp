import type { ReactNode } from "react";

export interface PageHeaderProps {
  title?: ReactNode;
  rightSide?: ReactNode;
  description?: ReactNode;
  className?: string;
  backLink?: string;
  showBackLink?: boolean;
  isTitleCompact?: boolean;
}

export interface UsePageHeaderProps {
  backLink?: string;
}
