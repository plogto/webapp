import type { MouseEventHandler } from "react";
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

export interface ConnectionButtons {
  follow: ConnectionButton;
  following: ConnectionButton;
  requested: ConnectionButton;
}

export interface UseConnectionProps {
  userId: User["id"];
}
