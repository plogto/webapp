import type { ReactNode } from "react";

export interface CardProps {
  shadow?: boolean;
  rounded?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
}
