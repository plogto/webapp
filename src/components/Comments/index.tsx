import { Comment } from "@components/Comment";
import { OnReply, CommentsWithPagination } from "@t/comment";

// TODO: add loading prop
type Props = {
  comments?: CommentsWithPagination;
  onReply: OnReply;
};

export function Comments({ comments, onReply }: Props) {
  return (
    <div>
      {comments?.comments?.map(comment => (
        <Comment key={comment.id} comment={comment} onReply={onReply} />
      ))}
    </div>
  );
}
