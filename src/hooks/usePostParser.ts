import { HASHTAG_PATTERN, postParser } from "@/config";
import anchorme from "anchorme";
import { ParsePostProps, PostStore } from "./@types";
import { v4 as uuid } from "uuid";
import { ReactNode } from "react";

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
              // @ts-expect-error
              component: hashtagComponent(value),
            };
            return `$$$___${key}___$$$`;
          },
        },
      ],
    });

    const keys = result.split(postParser.KEY_PATTERN);

    return keys.map(item => {
      if (item.match(postParser.KEY_PATTERN)) {
        let key = item.replace(postParser.LEFT_TRIM_PATTERN, "");
        key = key.replace(postParser.RIGHT_TRIM_PATTERN, "");
        return store[`${key}`].component;
      } else {
        return item;
      }
    });
  }

  return { parsePost };
}
