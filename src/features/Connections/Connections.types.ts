import type { ConnectionTab } from "@t/connection";
import type { User } from "@t/user";

export interface ConnectionsProps {
  type: "followers" | "following";
}

export interface ConnectionsTab {
  type: ConnectionsProps["type"];
  title: string;
  onClick: () => void;
}

export interface ConnectionsContentProps {
  user?: User;
  tabs: ConnectionTab[];
}
