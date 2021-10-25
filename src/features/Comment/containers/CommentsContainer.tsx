import styles from "../Comment.module.css";
import { Comment } from "../components/Comment";
import { useComments } from "../hooks";
import { CommentsWithPagination } from "@t/comment";

// TODO: add loading prop
type Props = {
  type?: "COMMENT" | "REPLY";
  comments?: CommentsWithPagination;
};

export function Comments(props: Props) {
  const { type, comments } = props;
  const { showReplies, setShowReplies } = useComments();

  return (
    <>
      {type === "REPLY" ? (
        <>
          {!showReplies && (
            <div
              onClick={() => setShowReplies(true)}
              className={styles.replyCounter}
            >
              {/* TODO: use Translation */}
              View replies ({comments?.pagination.totalDocs})
            </div>
          )}
          {showReplies && (
            <div>
              {comments?.comments?.map(comment => (
                <Comment type={type} key={comment.id} comment={comment} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          {comments?.comments?.map(comment => (
            <Comment type={type} key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
}
