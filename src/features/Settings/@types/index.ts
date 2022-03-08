import { PageUrls } from "@enums/pages";
import type { IconNames } from "@components/Icon";

export type SettingsItem = {
  title: string;
  href: PageUrls;
  icon?: IconNames;
  className?: string;
};

export type LogoutButtonProps = {
  className?: string;
};
