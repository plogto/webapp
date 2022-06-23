import { DateType, PostTypeKey, RepliesView } from "@enums";
import type { PostTypes } from "@t/post";

export const CONTENT_MAX_LENGTH = 999;
export const HASHTAG_PATTERN = /#(\w|_)+/gi;
export const SENDER_USERNAME = "$$$___sender.username___$$$";
export const POST_CONTENT = "$$$___post.content___$$$";

export const POST_PARSER = {
  KEY_PATTERN: /(\$\$\$___[0123456789abcdefg-]+___\$\$\$)(?!;)/gim,
  LEFT_TRIM_PATTERN: /^\$\$\$___/gim,
  RIGHT_TRIM_PATTERN: /___\$\$\$$/gim,
};

export const NOTIFICATION_PARSER = {
  KEY_PATTERN: /(\$\$\$___[a-z.]+___\$\$\$)(?!;)/gim,
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
    repliesView: RepliesView.COMPLETE,
  },
  CARD: {
    key: PostTypeKey.CARD,
    headerSize: "normal",
    contentSize: "normal",
    dateSize: "small",
    footerSize: "normal",
    isContentClickable: true,
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
    repliesView: RepliesView.NONE,
  },
};

export const ID = {
  HOME_CARDS: "homeCards",
  PROFILE_CARDS: "profileCards",
  TAG_POSTS: "tagPosts",
};
