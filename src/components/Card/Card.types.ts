import type { ReactNode } from "react";

export interface CardProps {
  shadow?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: ReactNode;
}
