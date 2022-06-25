import type { ConnectionTab } from "@t/connection";
import type { PostTab } from "@t/post";

export interface TabsProps {
  tabs: ConnectionTab[] | PostTab[];
}
