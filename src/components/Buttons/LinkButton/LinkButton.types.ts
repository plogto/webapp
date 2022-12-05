import type { ReactNode } from "react";
import { ButtonLayout } from "@enums";

export interface LinkButtonProps {
  layout?: ButtonLayout;
  href: string;
  className?: string;
  children?: ReactNode;
}
