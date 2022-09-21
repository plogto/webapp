import type { ReactNode } from "react";

export interface PageHeaderProps {
  title?: ReactNode;
  rightSide?: ReactNode;
  description?: ReactNode;
  className?: string;
  backLink?: string;
  isShowBackLink?: boolean;
  isTitleCompact?: boolean;
}

export interface UsePageHeaderProps {
  backLink?: string;
}
