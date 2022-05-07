import type { IconNames } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import { User } from "@t/user";

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

export interface ChangeImageProfileProps {
  title: string;
  isOpen: boolean;
  showRemoveButton?: boolean;
  closeModal: () => void;
  removeImage: () => void;
  onClickInputFile: () => void;
}

export interface UseImageProfileProps {
  key: "avatar" | "background";
}
