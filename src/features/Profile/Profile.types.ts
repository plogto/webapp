import type { MouseEventHandler } from "react";
import type { Status } from "@t/status";
import type { User } from "@t/user";

interface ConnectionButton {
  className?: string;
  loadingClassName?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface Tab {
  title: string;
  href: string;
  data: PostData;
  getMoreData: () => void;
  emptyStatus: Status;
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
