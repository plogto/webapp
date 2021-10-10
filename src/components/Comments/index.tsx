import { Comment } from "@components/Comment";
import { PostCommentsWithPagination } from "@t/postComment";

// TODO: add loading prop
type Props = {
  comments?: PostCommentsWithPagination;
};

export function Comments({ comments }: Props) {
  return (
    <div>
      {comments?.postComments?.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
