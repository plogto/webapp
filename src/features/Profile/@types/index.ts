import { MouseEventHandler } from "react";

type ConnectionButton = {
  className?: string;
  loadingClassName?: string;
  loading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ConnectionButtons = {
  follow: ConnectionButton;
  following: ConnectionButton;
  requested: ConnectionButton;
};
