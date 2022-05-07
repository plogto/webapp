import type { ReactNode } from "react";

export interface CardProps {
  shadow?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
}
