import type { ReactNode } from "react";
import type { IconNames } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import type { User } from "@t/user";

export interface SettingsProps {
  title?: ReactNode;
  children?: ReactNode;
}

export interface SettingsItem {
  title: string;
  href: PageUrls;
  icon?: IconNames;
  className?: string;
}

export interface LogoutButtonProps {
  className?: string;
}

export interface AvatarProfileProps {
  avatar?: User["avatar"];
}

export interface BackgroundProfileProps {
  background?: User["background"];
}
