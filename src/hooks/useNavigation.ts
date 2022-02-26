import type { Post } from "@t/post";
import type { Tag } from "@t/tag";
import type { User } from "@t/user";

export function useNavigation() {
  function formatProfilePageRoute(username: User["username"]) {
    return `/${username}`;
  }

  function formatPostPageRoute(url: Post["url"]) {
    return `/p/${url}`;
  }

  function formatTagPageRoute(tagName: Tag["name"]) {
    return `/t/${tagName}`;
  }

  return { formatProfilePageRoute, formatPostPageRoute, formatTagPageRoute };
}
