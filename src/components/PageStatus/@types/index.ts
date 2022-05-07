import type { ReactNode } from "react";

export interface PageStatusProps {
  title: string;
  description?: string;
  icon: ReactNode;
  className?: string;
}
