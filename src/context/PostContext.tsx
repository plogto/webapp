import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { Comment } from "@t/comment";

const PostContext = createContext<PostContext>({});
const PostContextSetState = createContext<SetPostContext>({
  setPost: () => {},
  setNewComment: () => {},
});

type Props = {
  children: ReactNode;
};

export function PostProvider({ children }: Props) {
  const [post, setPost] = useState<PostContext["post"]>();
  const [newComment, setNewComment] = useState<PostContext["newComment"]>();

  return (
    <PostContext.Provider
      value={{
        post,
        newComment,
      }}
    >
      <PostContextSetState.Provider
        value={{
          setPost,
          setNewComment,
        }}
      >
        {children}
      </PostContextSetState.Provider>
    </PostContext.Provider>
  );
}

function usePostState() {
  const { post, newComment } = useContext(PostContext);

  return { post, newComment };
}

function usePostSetState() {
  const { setPost, setNewComment } = useContext(PostContextSetState);

  return { setPost, setNewComment };
}

export function usePostContext() {
  const { post, newComment } = usePostState();
  const { setPost, setNewComment } = usePostSetState();

  const addNewCommentToComments = useCallback((comment: Comment) => {
    if (!comment?.parent) {
      // TODO: fix this type
      // @ts-expect-error ignore
      setPost(prevState => {
        const comments = prevState?.comments;
        return {
          ...prevState,
          comments: {
            ...comments,
            comments: comments?.comments.length
              ? [comment, ...comments?.comments]
              : [comment],
          },
        };
      });
    }
    removeParentForNewComment();
  }, []);

  const removeCommentFromComments = useCallback((comment: Comment) => {
    if (comment) {
      // TODO: fix this type
      // @ts-expect-error ignore
      setPost(prevState => {
        const comments = prevState?.comments;
        const newComments = comments?.comments.filter(c => c.id !== comment.id);
        return {
          ...prevState,
          comments: {
            ...comments,
            comments: comments?.comments.length ? newComments : [],
          },
        };
      });
    }
  }, []);

  const addParentForNewComment = useCallback((comment: Comment) => {
    // TODO: fix this type
    // @ts-expect-error ignore
    setNewComment(prevState => {
      return {
        ...prevState,
        parent: comment,
      };
    });
  }, []);

  const removeParentForNewComment = useCallback(() => {
    // TODO: fix this type
    // @ts-expect-error ignore
    setNewComment(prevState => {
      return {
        ...prevState,
        parent: undefined,
      };
    });
  }, []);

  return {
    post,
    setPost,
    newComment,
    setNewComment,
    addNewCommentToComments,
    addParentForNewComment,
    removeParentForNewComment,
    removeCommentFromComments,
  };
}
