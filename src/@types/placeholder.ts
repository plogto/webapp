import type { IconNames } from "@components/Icon";

export interface Placeholder {
  title: string;
  description?: string;
  icon: IconNames;
  backButton?: {
    href: string;
    title: string;
  };
}
