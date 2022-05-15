import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { PostTypeKey } from "@enums";
import { Post } from "@components/Post";
import type { RepliesProps } from "./@types";
import styles from "./Replies.module.css";

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

  const repliesComponent = replies?.posts?.map(post => (
    <Post key={post.id} post={post} type={type} />
  ));

  const repliesClasses = classNames(styles.replies, isChild && styles.isChild);

  return (
    <>
      {(isParent || showReplies) && (
        <div className={repliesClasses}>{repliesComponent}</div>
      )}
      {!isParent && !showReplies && replies?.posts?.length && (
        <button className={styles.showReplies} onClick={openReplies}>
          {t("buttons.viewReplies")}
        </button>
      )}
    </>
  );
}
