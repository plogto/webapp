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
});

type Props = {
  children: ReactNode;
};

export function PostProvider({ children }: Props) {
  const [post, setPost] = useState<PostContext["post"]>();

  return (
    <PostContext.Provider
      value={{
        post,
      }}
    >
      <PostContextSetState.Provider
        value={{
          setPost,
        }}
      >
        {children}
      </PostContextSetState.Provider>
    </PostContext.Provider>
  );
}

function usePostState() {
  const { post } = useContext(PostContext);

  return { post };
}

function usePostSetState() {
  const { setPost } = useContext(PostContextSetState);

  return { setPost };
}

export function usePostContext() {
  const { post } = usePostState();
  const { setPost } = usePostSetState();

  const addNewPostCommentToComments = useCallback((comment: PostComment) => {
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

  return { post, setPost, addNewPostCommentToComments };
}
