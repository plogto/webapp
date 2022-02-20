import { PostTypeKey, RepliesView } from "@enums";
import { formatCountTitle } from "@utils/formatter";
import type { UsePostProps } from "../@types";

export function usePost(props: UsePostProps) {
  const {
    type,
    post: { replies },
    repliesActions,
  } = props;

  const { repliesView } = type;

  const isParentReply = type.key === PostTypeKey.REPLY;
  const isParent = type.key === PostTypeKey.PAGE || isParentReply;
  const isCard = [PostTypeKey.PAGE, PostTypeKey.CARD].includes(type.key);

  const repliesCounter = formatCountTitle({
    singular: "reply",
    plural: "replies",
    count: replies?.pagination?.totalDocs,
  });

  const hasReplies = !!repliesCounter.count;
  const showReplies = hasReplies && repliesActions;

  const showQuickReplies = hasReplies && repliesView === RepliesView.QUICK;
  const showCompleteReplies =
    showReplies && repliesView === RepliesView.COMPLETE;
  const showThreadReplies = showReplies && repliesView === RepliesView.THREAD;

  return {
    isParentReply,
    isParent,
    isCard,
    repliesCounter,
    showQuickReplies,
    showCompleteReplies,
    showThreadReplies,
  };
}
