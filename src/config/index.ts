export const CONTENT_MAX_LENGTH = 500;
export const HASHTAG_PATTERN = /#(\w|_)+/gi;
export const SENDER_USERNAME = "$$$___sender.username___$$$";
export const COMMENT_CONTENT = "$$$___comment.content___$$$";

export const postParser = {
  KEY_PATTERN: /(\$\$\$___[0123456789abcdefg-]+___\$\$\$)(?!;)/gim,
  LEFT_TRIM_PATTERN: /^\$\$\$___/gim,
  RIGHT_TRIM_PATTERN: /___\$\$\$$/gim,
};

export const NOTIFICATION_PARSER = {
  KEY_PATTERN: /(\$\$\$___[a-z.]+___\$\$\$)(?!;)/gim,
};
