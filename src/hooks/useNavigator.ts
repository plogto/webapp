import { useMemo } from "react";
import { useRouter } from "next/router";
import { PROTECTED_PAGES } from "@constants";
import { ProfileActiveTab, QueryKeys } from "@enums";
import { PageUrls } from "@enums/pages";
import type { Post } from "@t/post";
import type { Tag } from "@t/tag";
import type { Ticket } from "@t/ticket";
import type { User } from "@t/user";

export function useNavigator() {
  const { pathname } = useRouter();
  function formatProfilePageRoute(username: User["username"]) {
    return `/${username}`;
  }

  function formatRepliesPostsPageRoute(username: User["username"]) {
    return `/${username}?${QueryKeys.TAB}=${ProfileActiveTab.REPLIES}`;
  }

  function formatLikesPostsPageRoute(username: User["username"]) {
    return `/${username}?${QueryKeys.TAB}=${ProfileActiveTab.LIKES}`;
  }

  function formatSavedPostsPageRoute(username: User["username"]) {
    return `/${username}?${QueryKeys.TAB}=${ProfileActiveTab.SAVED}`;
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
    return `${PageUrls.ADD_POST}?${QueryKeys.PARENT_URL}=${url}`;
  }

  function formatEditPostPageRoute(url: Post["url"]) {
    return `/p/${url}${PageUrls.EDIT_POST}`;
  }

  function formatTicketPageRoute(url: Ticket["url"]) {
    return `${PageUrls.SUPPORT}/${url}`;
  }

  const isSettingsPage = useMemo(
    () => pathname === PageUrls.SETTINGS,
    [pathname],
  );

  const isProtectedPage = useMemo(
    () => PROTECTED_PAGES.includes(pathname as PageUrls),
    [pathname],
  );

  function isRouteActive(href: string) {
    return pathname === href;
  }

  return {
    formatProfilePageRoute,
    formatRepliesPostsPageRoute,
    formatLikesPostsPageRoute,
    formatSavedPostsPageRoute,
    formatPostPageRoute,
    formatTagPageRoute,
    formatFollowersPageRoute,
    formatFollowingPageRoute,
    formatAddPostPageRoute,
    formatEditPostPageRoute,
    formatTicketPageRoute,
    isSettingsPage,
    isProtectedPage,
    isRouteActive,
  };
}
