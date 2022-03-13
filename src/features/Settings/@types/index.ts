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

export type AvatarProfileProps = {
  avatar?: string;
};

export type BackgroundProfileProps = {
  background?: string;
};

export type ChangeImageProfileProps = {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  removeImage: () => void;
  onClickInputFile: () => void;
};

export type UseImageProfileProps = {
  key: "avatar" | "background";
};
