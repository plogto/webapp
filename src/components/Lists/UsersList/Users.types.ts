import { UsersListDataKey } from "@enums";
import type { ConnectionsWithPageInfo } from "@t/connection";
import type { LikedPostsWithPageInfo } from "@t/likedPost";
import type { Placeholder } from "@t/placeholder";

export interface UsersListProps {
  // TODO: fix this type
  dataKey: UsersListDataKey;
  data?: ConnectionsWithPageInfo | LikedPostsWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
  itemClassName?: string;
}
