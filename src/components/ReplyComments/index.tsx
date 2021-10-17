import { useState } from "react";
import styles from "./ReplyComments.module.css";
import { ReplyComment } from "@components/ReplyComment";
import { OnReply, PostCommentsWithPagination } from "@t/postComment";

// TODO: add loading prop
type Props = {
  comments?: PostCommentsWithPagination;
  onReply: OnReply;
};

export function ReplyComments(props: Props) {
  const { comments, onReply } = props;
  const [showReplies, setShowReplies] = useState(false);

  return (
    <>
      {!showReplies && (
        <div
          onClick={() => setShowReplies(true)}
          className={styles.repliesCounter}
        >
          View replies ({comments?.pagination.totalDocs})
        </div>
      )}
      {showReplies && (
        <div>
          {comments?.postComments?.map(comment => (
            <ReplyComment
              key={comment.id}
              comment={comment}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </>
  );
}
