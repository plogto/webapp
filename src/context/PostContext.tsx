import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { Post } from "@t/post";
import { PostLike } from "@t/postLike";

const PostContext = createContext<PostContext>({});
const PostContextSetState = createContext<SetPostContext>({
  setData: () => {},
  setIsLiked: () => {},
  setLikes: () => {},
});

type Props = {
  children: ReactNode;
};

export function PostProvider({ children }: Props) {
  const [dataState, setDataState] = useState<PostContext["data"]>();
  const [isLikedState, setIsLikedState] = useState<PostContext["isLiked"]>();
  const [likesState, setLikesState] = useState<PostContext["likes"]>();

  return (
    <PostContext.Provider
      value={{
        data: dataState,
        isLiked: isLikedState,
        likes: likesState,
      }}
    >
      <PostContextSetState.Provider
        value={{
          setData: setDataState,
          setIsLiked: setIsLikedState,
          setLikes: setLikesState,
        }}
      >
        {children}
      </PostContextSetState.Provider>
    </PostContext.Provider>
  );
}

function usePostState() {
  const { data, isLiked, likes } = useContext(PostContext);

  return { data, isLiked, likes };
}

function usePostSetState() {
  const { setData, setIsLiked, setLikes } = useContext(PostContextSetState);

  return { setData, setIsLiked, setLikes };
}

export function usePostContext() {
  const { data, isLiked, likes } = usePostState();
  const { setData, setIsLiked, setLikes } = usePostSetState();

  function likePostContext(postLike: PostLike) {
    if (!isLiked) {
      setLikes((prevState: PostContext["likes"]) => {
        return (
          prevState && {
            ...prevState,
            postLikes: prevState?.postLikes
              ? [postLike, ...prevState?.postLikes]
              : [postLike],
            pagination: {
              ...prevState?.pagination,
              totalDocs: prevState.pagination.totalDocs + 1,
            },
          }
        );
      });
      setIsLiked(postLike);
    }
  }

  function unlikePostContext(postLike: PostLike) {
    if (isLiked) {
      setLikes((prevState: PostContext["likes"]) => {
        return (
          prevState && {
            ...prevState,
            postLikes: prevState?.postLikes
              ? prevState?.postLikes.filter(p => p.id !== postLike.id)
              : [],
            pagination: {
              ...prevState?.pagination,
              totalDocs: prevState.pagination.totalDocs - 1,
            },
          }
        );
      });
      setIsLiked(undefined);
    }
  }

  const setPostContext = useCallback((post: Post) => {
    const { id, user, content, isLiked, likes, createdAt, updatedAt } = post;
    setData({
      id,
      user,
      content,
      createdAt,
      updatedAt,
    });
    setIsLiked(isLiked);
    setLikes(likes);
  }, []);

  return {
    data,
    isLiked,
    likes,
    setData,
    likePostContext,
    unlikePostContext,
    setPostContext,
  };
}
