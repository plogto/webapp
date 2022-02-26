import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Replies.module.css";
import { Post } from "@components/Post";
import { POST_TYPES } from "@config";
import { PostTypeKey } from "@enums";
import type { RepliesProps } from "./@types";

export function Replies(props: RepliesProps) {
  const { replies, type } = props;
  const [showReplies, setShowReplies] = useState(false);
  const isParent =
    type.key === PostTypeKey.PAGE || type.key === PostTypeKey.REPLY;

  const openReplies = useCallback(() => {
    setShowReplies(true);
  }, []);

  const { t } = useTranslation("post");

  const repliesComponent = replies?.posts?.map((post, index) => (
    <Post
      key={post.id}
      post={post}
      type={
        (replies.posts && index < replies?.posts?.length - 1) ||
        type === POST_TYPES.REPLY
          ? type
          : POST_TYPES.LAST_CHILD
      }
    />
  ));

  return (
    <div className={styles.replies}>
      {(isParent || showReplies) && repliesComponent}
      {!isParent && !showReplies && replies?.posts?.length && (
        <button className={styles.showReplies} onClick={openReplies}>
          {t("buttons.viewReplies")}
        </button>
      )}
    </div>
  );
}
