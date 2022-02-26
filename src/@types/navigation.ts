import { PageUrls } from "@enums/pages";
import type { ReactNode } from "react";

export type NavigationItem = {
  title?: string;
  icon: ReactNode;
  // TODO: remove string and fix the type
  href: PageUrls | string;
};
