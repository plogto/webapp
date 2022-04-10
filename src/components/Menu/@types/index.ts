import type { IconNames } from "@components/Icon";
import type { ReactNode } from "react";

type MenuItem = {
  key: string;
  type?: "normal" | "delete";
  title: string;
  icon: IconNames;
  onClick?: () => void;
};

export type MenuProps = {
  items: MenuItem[];
  buttonIcon: ReactNode;
  className?: string;
  itemsClassName?: string;
};
