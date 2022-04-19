import { PageUrls } from "@enums/pages";
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

  function formatFollowersPageRoute(username: User["username"]) {
    return `/${username}${PageUrls.FOLLOWERS}`;
  }

  function formatFollowingPageRoute(username: User["username"]) {
    return `/${username}${PageUrls.FOLLOWING}`;
  }

  function formatAddPostPageRoute(url: Post["url"]) {
    return `${PageUrls.ADD_POST}?parentUrl=${url}`;
  }

  return {
    formatProfilePageRoute,
    formatPostPageRoute,
    formatTagPageRoute,
    formatFollowersPageRoute,
    formatFollowingPageRoute,
    formatAddPostPageRoute,
  };
}
