import type { MouseEventHandler } from "react";
import type { PostTab } from "@t/post";
import type { User } from "@t/user";

interface ConnectionButton {
  className?: string;
  loadingClassName?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ProfileInfoProps {
  user: User;
}

export interface ProfileContentProps {
  user?: User;
  tabs: PostTab[];
}

export interface ConnectionButtons {
  follow: ConnectionButton;
  following: ConnectionButton;
  requested: ConnectionButton;
}

export interface UseConnectionProps {
  userId: User["id"];
}
