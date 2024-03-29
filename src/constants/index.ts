import { DateType, PostTypeKey, RepliesView } from "@enums";
import { PageUrls } from "@enums/pages";
import type { PostTypes } from "@t/post";
import { prepareKeyPattern } from "@utils/pattern";

export const CONTENT_MAX_LENGTH = 999;
export const HASHTAG_PATTERN = /#(\w|_)+/gi;
export const MENTION_PATTERN = /@(\w|_)+/gi;
export const USERNAME_PATTERN = /^[a-zA-Z0-9._]+$/;
export const LINK_PATTERN = new RegExp(
  "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?",
  "igm",
);
export const SENDER_FULL_NAME = prepareKeyPattern("sender.fullName");
export const RECEIVER_FULL_NAME = prepareKeyPattern("receiver.fullName");
export const POST_CONTENT = prepareKeyPattern("post.content");

export const CREDIT_TRANSACTION_DESCRIPTION_VARIABLE_KEYS = {
  INVITED_USER: prepareKeyPattern("invited_user"),
  INVITER_USER: prepareKeyPattern("inviter_user"),
  TICKET: prepareKeyPattern("ticket"),
};

export const POST_PARSER = {
  KEY_PATTERN: /(\$\$\$___[0123456789abcdefg-]+___\$\$\$)(?!;)/gim,
  LEFT_TRIM_PATTERN: /^\$\$\$___/gim,
  RIGHT_TRIM_PATTERN: /___\$\$\$$/gim,
};

export const NOTIFICATION_PARSER = {
  KEY_PATTERN: /(\$\$\$___[a-z.]+___\$\$\$)(?!;)/gim,
};

export const CREDIT_TRANSACTION_PARSER = {
  KEY_PATTERN: /(\$\$\$___[a-z._]+___\$\$\$)(?!;)/gim,
};

export const POST_TYPES: PostTypes = {
  PAGE: {
    key: PostTypeKey.PAGE,
    headerSize: "normal",
    contentSize: "large",
    dateSize: "normal",
    footerSize: "normal",
    dateType: DateType.LONG,
    isContentClickable: false,
    isShowUserInfo: true,
    repliesView: RepliesView.COMPLETE,
  },
  CARD: {
    key: PostTypeKey.CARD,
    headerSize: "normal",
    contentSize: "normal",
    dateSize: "small",
    footerSize: "normal",
    isContentClickable: true,
    isShowUserInfo: true,
    repliesView: RepliesView.QUICK,
  },
  REPLY: {
    key: PostTypeKey.REPLY,
    headerSize: "small",
    contentSize: "small",
    dateSize: "small",
    footerSize: "small",
    isContentClickable: true,
    repliesView: RepliesView.THREAD,
  },
  CHILD: {
    key: PostTypeKey.CHILD,
    headerSize: "small",
    contentSize: "small",
    dateSize: "small",
    footerSize: "small",
    isContentClickable: true,
    repliesView: RepliesView.NONE,
  },
  PREVIEW: {
    key: PostTypeKey.PREVIEW,
    headerSize: "normal",
    contentSize: "normal",
    dateSize: "small",
    isContentClickable: false,
    showMoreButton: false,
    isShowUserInfo: true,
    repliesView: RepliesView.NONE,
  },
};

export const ID = {
  HOME_CARDS: "homeCards",
  PROFILE_CARDS: "profileCards",
  TAG_POSTS: "tagPosts",
  NOTIFICATIONS: "notifications",
  CREDIT_TRANSACTIONS: "creditTransactions",
};

export const MENU_KEYS = ["normal", "delete", "edit"];

export const PROTECTED_PAGES = [
  PageUrls.SEARCH,
  PageUrls.ADD_POST,
  PageUrls.EDIT_POST,
  PageUrls.SETTINGS,
  PageUrls.CHANGE_PASSWORD,
  PageUrls.EDIT_PROFILE,
  PageUrls.THEMES,
  PageUrls.NOTIFICATIONS,
  PageUrls.FOLLOW_REQUESTS,
  PageUrls.FOLLOWERS,
  PageUrls.FOLLOWING,
];

export const PLOG_ACCOUNT = process.env.PLOG_ACCOUNT;
