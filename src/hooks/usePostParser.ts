import anchorme from "anchorme";
import { v4 as uuid } from "uuid";
import { HASHTAG_PATTERN, POST_PARSER } from "@config";
import type { ParsePostProps, PostStore } from "./@types";
import type { ReactNode } from "react";

export function usePostParser() {
  function parsePost({ content, hashtagComponent }: ParsePostProps): ReactNode {
    const store: PostStore = {};
    const result = anchorme({
      input: content,
      extensions: [
        {
          test: HASHTAG_PATTERN,
          transform: value => {
            const key = uuid();
            store[key] = {
              key,
              // TODO: fix type error
              // @ts-expect-error ignore
              component: hashtagComponent(value),
            };
            return `$$$___${key}___$$$`;
          },
        },
      ],
    });

    const keys = result.split(POST_PARSER.KEY_PATTERN);

    return keys.map(item => {
      if (item.match(POST_PARSER.KEY_PATTERN)) {
        let key = item.replace(POST_PARSER.LEFT_TRIM_PATTERN, "");
        key = key.replace(POST_PARSER.RIGHT_TRIM_PATTERN, "");
        return store[`${key}`].component;
      } else {
        return item;
      }
    });
  }

  return { parsePost };
}
