import { PageUrls } from "@enums/pages";
import type { SettingsItem } from "../@types";

export const SETTINGS_ITEMS: SettingsItem[] = [
  {
    title: "Edit Profile",
    href: PageUrls.EDIT_PROFILE,
    icon: "user",
  },
  {
    title: "Change Password",
    href: PageUrls.CHANGE_PASSWORD,
    icon: "key",
  },
];