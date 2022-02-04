import { ReactNode } from "react";
import { PageUrls } from "@enums/pages";

export type NavigationItem = {
  title?: string;
  icon: ReactNode;
  // TODO: remove string and fix the type
  href: PageUrls | string;
};
