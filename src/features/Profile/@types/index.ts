import type { User } from "@t/user";
import type { MouseEventHandler } from "react";

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

export type UseConnectionProps = {
  userId: User["id"];
};
