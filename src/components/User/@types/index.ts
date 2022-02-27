import type { User } from "@t/user";
import type { MouseEventHandler } from "react";

type ActionButton = {
  className?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ActionButtons = {
  follow: ActionButton;
  following: ActionButton;
  requested: ActionButton;
  accept: ActionButton;
  reject: ActionButton;
};

export type UserProps = {
  user: User;
  showAccept?: boolean;
  showDelete?: boolean;
  showFollow?: boolean;
};
