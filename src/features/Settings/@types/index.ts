import { PageUrls } from "@enums/pages";
import { User } from "@t/user";
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
  avatar?: User["avatar"];
};

export type BackgroundProfileProps = {
  background?: User["background"];
};

export type ChangeImageProfileProps = {
  title: string;
  isOpen: boolean;
  showRemoveButton?: boolean;
  closeModal: () => void;
  removeImage: () => void;
  onClickInputFile: () => void;
};

export type UseImageProfileProps = {
  key: "avatar" | "background";
};
