import { PageUrls } from "@enums/pages";
import type { SettingsItem } from "../@types";

export const SETTINGS_ITEMS: SettingsItem[] = [
  {
    title: "Edit Profile",
    href: PageUrls.EDIT_PROFILE,
    icon: "User",
  },
  {
    title: "Themes",
    href: PageUrls.THEMES,
    icon: "ColorPalette",
  },
  {
    title: "Change Password",
    href: PageUrls.CHANGE_PASSWORD,
    icon: "Key",
  },
];
