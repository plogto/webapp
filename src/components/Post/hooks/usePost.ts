import { useCallback } from "react";
import { MenuProps } from "@components/Menu/@types";
import { useAccountContext } from "@contexts/AccountContext";
import { PostTypeKey, RepliesView } from "@enums";
import { formatCountTitle } from "@utils/formatter";
import type { UsePostProps } from "../@types";

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

  const isParentReply = type.key === PostTypeKey.REPLY;
  const isParent = type.key === PostTypeKey.PAGE || isParentReply;
  const isCard = [
    PostTypeKey.PAGE,
    PostTypeKey.CARD,
    PostTypeKey.PREVIEW,
  ].includes(type.key);

  const repliesCounter = formatCountTitle({
    singular: "reply",
    plural: "replies",
    count: replies?.pagination?.totalDocs,
  });

  const hasReplies = !!repliesCounter.count;
  const showQuickReplies = hasReplies && repliesView === RepliesView.QUICK;
  const showCompleteReplies = repliesView === RepliesView.COMPLETE;
  const showThreadReplies = repliesView === RepliesView.THREAD;

  const filterMenuItems = useCallback(
    (items: MenuProps["items"]) => {
      return items.filter(({ key }) => {
        if (id !== user?.id && key === "delete") {
          return false;
        }
        return true;
      });
    },
    [id, user?.id],
  );

  return {
    isParentReply,
    isParent,
    isCard,
    repliesCounter,
    showQuickReplies,
    showCompleteReplies,
    showThreadReplies,
    filterMenuItems,
  };
}
