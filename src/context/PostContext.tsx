import { createContext, ReactNode, useContext, useState } from "react";

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

  return { post, setPost };
}
