import type { ReactNode } from "react";
import type { IconNames } from "@components/Icon";

interface MenuItem {
  key: string;
  type?: "normal" | "delete";
  title: string;
  icon: IconNames;
  onClick?: () => void;
}

export interface MenuProps {
  items: MenuItem[];
  buttonIcon: ReactNode;
  className?: string;
  itemsClassName?: string;
}
