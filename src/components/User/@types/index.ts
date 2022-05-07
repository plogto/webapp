import type { MouseEventHandler } from "react";
import type { User } from "@t/user";

interface ActionButton {
  className?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface ActionButtons {
  follow: ActionButton;
  following: ActionButton;
  requested: ActionButton;
  accept: ActionButton;
  reject: ActionButton;
}

export interface UserProps {
  user: User;
  showAccept?: boolean;
  showDelete?: boolean;
  showFollow?: boolean;
}
