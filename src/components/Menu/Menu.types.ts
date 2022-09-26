import type { ReactNode } from "react";
import type { IconNames } from "@components/Icon";

interface MenuItem<T> {
  key: T;
  type?: "normal" | "delete" | "success" | "info";
  title: string;
  icon: IconNames;
  onClick?: () => void;
}

export interface MenuProps<T = string> {
  items: MenuItem<T>[];
  buttonIcon: ReactNode;
  className?: string;
  itemsClassName?: string;
}
