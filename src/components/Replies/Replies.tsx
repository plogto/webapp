import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { PostTypeKey } from "@enums";
import { Post } from "@components/Post";
import { formatCountTitle } from "@utils/formatter";
import styles from "./Replies.module.css";
import type { RepliesProps } from "./Replies.types";

export function Replies(props: RepliesProps) {
  const { replies, type } = props;
  const [showReplies, setShowReplies] = useState(false);
  const isChild = type.key === PostTypeKey.CHILD;
  const isParent =
    type.key === PostTypeKey.PAGE || type.key === PostTypeKey.REPLY;

  const openReplies = useCallback(() => {
    setShowReplies(true);
  }, []);

  const { t } = useTranslation("post");

  const repliesComponent = replies?.edges?.map(({ node }) => (
    <Post key={node.id} post={node} type={type} />
  ));

  const repliesClasses = classNames(styles.replies, isChild && styles.isChild);
  const repliesCount = replies?.totalCount;

  return (
    <>
      {(isParent || showReplies) && (
        <div className={repliesClasses}>{repliesComponent}</div>
      )}
      {!isParent && !showReplies && !!replies?.totalCount && (
        <button className={styles.showReplies} onClick={openReplies}>
          {
            formatCountTitle({
              singular: t("buttons.viewReply", { repliesCount }),
              plural: t("buttons.viewReplies", { repliesCount }),
              count: repliesCount,
            }).title
          }
        </button>
      )}
    </>
  );
}
