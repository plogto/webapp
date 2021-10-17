import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { PostComment } from "@t/postComment";

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

  const addNewCommentToComments = useCallback((comment: PostComment) => {
    // TODO: fix this type
    // @ts-expect-error ignore
    setPost(prevState => {
      const comments = prevState?.comments;
      return {
        ...prevState,
        comments: {
          ...comments,
          postComments: comments
            ? [comment, ...comments?.postComments]
            : [comment],
        },
      };
    });
  }, []);

  const addParentForNewComment = useCallback((comment: PostComment) => {
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
  };
}
