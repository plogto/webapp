import type { ReactNode } from "react";
import { PageUrls } from "@enums/pages";

export interface NavigationItem {
  icon: ReactNode;
  // TODO: remove string and fix the type
  href: PageUrls | string;
}
