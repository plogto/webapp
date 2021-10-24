import { useState } from "react";
import styles from "./ReplyComments.module.css";
import { Comment } from "@components/Comment";
import { OnReply, CommentsWithPagination } from "@t/comment";

// TODO: add loading prop
type Props = {
  comments?: CommentsWithPagination;
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
          {/* TODO: use Translation */}
          View replies ({comments?.pagination.totalDocs})
        </div>
      )}
      {showReplies && (
        <div>
          {comments?.comments?.map(comment => (
            <Comment
              type="REPLY"
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
