import { ReactNode } from "react";

export interface WrapperProps {
  children?: ReactNode;
  className?: string;
  paddingSize?: 4 | 2;
}
