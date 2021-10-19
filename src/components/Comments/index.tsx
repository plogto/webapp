import { Comment } from "@components/Comment";
import { OnReply, PostCommentsWithPagination } from "@t/postComment";

// TODO: add loading prop
type Props = {
  comments?: PostCommentsWithPagination;
  onReply: OnReply;
};

export function Comments({ comments, onReply }: Props) {
  return (
    <div>
      {comments?.postComments?.map(comment => (
        <Comment key={comment.id} comment={comment} onReply={onReply} />
      ))}
    </div>
  );
}
