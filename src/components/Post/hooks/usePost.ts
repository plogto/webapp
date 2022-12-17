import { useCallback, useState } from "react";
import { MENU_KEYS } from "@constants";
import { PostTypeKey, RepliesView } from "@enums";
import type { MenuProps } from "@components/Menu/Menu.types";
import { useAccountContext } from "@contexts/AccountContext";
import { formatCountTitle } from "@utils/formatter";
import type { UsePostProps } from "../Post.types";

export function usePost(props: UsePostProps) {
  const {
    type,
    post: {
      user: { id },
      replies,
    },
  } = props;

  const { repliesView } = type;
  const { user } = useAccountContext();
  const [showParent, setShowParent] = useState(false);

  const isPage = type.key === PostTypeKey.PAGE;
  const isParentReply = type.key === PostTypeKey.REPLY;
  const isParent = type.key === PostTypeKey.PAGE || isParentReply;
  const isCard = [PostTypeKey.CARD, PostTypeKey.PREVIEW].includes(type.key);

  const repliesCounter = formatCountTitle({
    singular: "reply",
    plural: "replies",
    count: replies?.totalCount,
  });

  const hasReplies = !!repliesCounter.count;
  const showQuickReplies = hasReplies && repliesView === RepliesView.QUICK;
  const showCompleteReplies = repliesView === RepliesView.COMPLETE;
  const showThreadReplies = repliesView === RepliesView.THREAD;

  const filterMenuItems = useCallback(
    (items: MenuProps["items"]) => {
      return items.filter(({ key }) => {
        if (id !== user?.id && MENU_KEYS.includes(key)) {
          return false;
        }
        return true;
      });
    },
    [id, user?.id],
  );

  return {
    isPage,
    isParentReply,
    isParent,
    isCard,
    repliesCounter,
    showQuickReplies,
    showCompleteReplies,
    showThreadReplies,
    showParent,
    setShowParent,
    filterMenuItems,
  };
}
