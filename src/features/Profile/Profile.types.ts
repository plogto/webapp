import type { MouseEventHandler } from "react";
import type { Tab } from "@t/post";
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
  tabs: Tab[];
}

export interface ConnectionButtons {
  follow: ConnectionButton;
  following: ConnectionButton;
  requested: ConnectionButton;
}

export interface UseConnectionProps {
  userId: User["id"];
}
