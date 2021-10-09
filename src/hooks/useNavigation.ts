import { Tag } from "@t/tag";
import { User } from "@t/user";

export function useNavigation() {
  function formatProfilePageRoute(username: User["username"]) {
    return `/${username}`;
  }

  function formatTagPageRoute(tagName: Tag["name"]) {
    return `/t/${tagName}`;
  }

  return { formatProfilePageRoute, formatTagPageRoute };
}
