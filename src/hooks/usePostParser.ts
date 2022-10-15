import type { ReactNode } from "react";
import anchorme from "anchorme";
import { v4 as uuid } from "uuid";
import {
  HASHTAG_PATTERN,
  LINK_PATTERN,
  MENTION_PATTERN,
  POST_PARSER,
} from "@constants";
import { prepareKeyPattern } from "@utils/pattern";
import type { ParsePostProps, ContentStore } from "./@types";

export function usePostParser() {
  function transformComponent(component: ReactNode, store: ContentStore) {
    const key = uuid();
    store[key] = {
      key,
      component,
    };
    return prepareKeyPattern(key);
  }

  function parsePost({
    content,
    hashtagComponent,
    mentionComponent,
    linkComponent,
  }: ParsePostProps): ReactNode {
    const store: ContentStore = {};
    const result = anchorme({
      input: content,
      extensions: [
        {
          test: HASHTAG_PATTERN,
          transform: value =>
            transformComponent(hashtagComponent(value), store),
        },
        {
          test: MENTION_PATTERN,
          transform: value =>
            transformComponent(mentionComponent(value), store),
        },
        {
          test: LINK_PATTERN,
          transform: value => transformComponent(linkComponent(value), store),
        },
      ],
    });

    const keys = result.split(POST_PARSER.KEY_PATTERN);

    return keys.map(item => {
      if (item.match(POST_PARSER.KEY_PATTERN)) {
        let key = item.replace(POST_PARSER.LEFT_TRIM_PATTERN, "");
        key = key.replace(POST_PARSER.RIGHT_TRIM_PATTERN, "");
        return store[key]?.component;
      } else {
        return item;
      }
    });
  }

  return { parsePost };
}
