export type ConnectionsProps = {
  type: "followers" | "following";
};

export type ConnectionsTab = {
  type: ConnectionsProps["type"];
  title: string;
  onClick: () => void;
};
