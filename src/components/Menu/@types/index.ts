import type { IconNames } from "@components/Icon";
import type { ReactNode } from "react";

type MenuItem = {
  key: string;
  title: string;
  icon: IconNames;
  className?: string;
  onClick?: () => void;
};

export type MenuProps = {
  items: MenuItem[];
  buttonIcon: ReactNode;
  className?: string;
  itemsClassName?: string;
};
