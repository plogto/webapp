import { MouseEventHandler } from "react";

type ActionButton = {
  className?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ActionButtons = {
  follow: ActionButton;
  following: ActionButton;
  accept: ActionButton;
  reject: ActionButton;
};
