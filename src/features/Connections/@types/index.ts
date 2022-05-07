export interface ConnectionsProps {
  type: "followers" | "following";
}

export interface ConnectionsTab {
  type: ConnectionsProps["type"];
  title: string;
  onClick: () => void;
}
