import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { GET_POST_BY_URL } from "@graphql/post";
import type { LikePostContextProps, SavePostContextProps } from "./@types/post";
import type { GetPostByUrlQuery } from "@graphql/@types/post";

const PostContext = createContext<PostContext>({});
const PostContextSetState = createContext<SetPostContext>({
  setPost: () => {},
});

type Props = {
  children: ReactNode;
};

export function PostProvider({ children }: Props) {
  const router = useRouter();
  const url = router.query.postUrl as string;
  const { data, loading } = useQuery<GetPostByUrlQuery>(GET_POST_BY_URL, {
    variables: { url },
  });

  const [post, setPost] = useState<PostContext["post"]>(data?.getPostByUrl);

  useEffect(() => {
    if (data && !loading) {
      setPost(data.getPostByUrl);
    }
  }, [data, loading]);

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

  const likePostContext = useCallback(
    ({ isLiked }: LikePostContextProps) => {
      if (post?.id === isLiked?.post.id) {
        setPost(prevPost => {
          return prevPost && { ...prevPost, isLiked };
        });
      } else {
        // TODO: fix the type
        // @ts-expect-error ignore
        setPost(prevPost => {
          return (
            prevPost && {
              ...prevPost,
              replies: {
                ...prevPost.replies,
                posts: prevPost.replies?.posts?.map(post => {
                  if (post?.id === isLiked?.post?.id) {
                    return {
                      ...post,
                      isLiked,
                    };
                  } else {
                    return {
                      ...post,
                      replies: {
                        ...post.replies,
                        posts: post.replies?.posts?.map(post => {
                          if (post?.id === isLiked?.post.id) {
                            return {
                              ...post,
                              isLiked,
                            };
                          } else {
                            return post;
                          }
                        }),
                      },
                    };
                  }
                }),
              },
            }
          );
        });
      }
    },
    [post?.id, setPost],
  );

  const unlikePostContext = useCallback(
    ({ isLiked }: LikePostContextProps) => {
      if (post?.id === isLiked?.post.id) {
        setPost(prevPost => {
          return prevPost && { ...prevPost, isLiked: undefined };
        });
      } else {
        // TODO: fix the type
        // @ts-expect-error ignore
        setPost(prevPost => {
          return (
            prevPost && {
              ...prevPost,
              replies: {
                ...prevPost.replies,
                posts: prevPost.replies?.posts?.map(post => {
                  if (post?.id === isLiked?.post.id) {
                    return {
                      ...post,
                      isLiked: undefined,
                    };
                  } else {
                    return {
                      ...post,
                      replies: {
                        ...post.replies,
                        posts: post.replies?.posts?.map(post => {
                          if (post?.id === isLiked?.post.id) {
                            return {
                              ...post,
                              isLiked: undefined,
                            };
                          } else {
                            return post;
                          }
                        }),
                      },
                    };
                  }
                }),
              },
            }
          );
        });
      }
    },
    [post?.id, setPost],
  );

  const savePostContext = useCallback(
    ({ isSaved }: SavePostContextProps) => {
      if (post?.id === isSaved?.post.id) {
        setPost(prevPost => {
          return prevPost && { ...prevPost, isSaved };
        });
      } else {
        // TODO: fix the type
        // @ts-expect-error ignore
        setPost(prevPost => {
          return (
            prevPost && {
              ...prevPost,
              replies: {
                ...prevPost.replies,
                posts: prevPost.replies?.posts?.map(post => {
                  if (post?.id === isSaved?.post?.id) {
                    return {
                      ...post,
                      isSaved,
                    };
                  } else {
                    return {
                      ...post,
                      replies: {
                        ...post.replies,
                        posts: post.replies?.posts?.map(post => {
                          if (post?.id === isSaved?.post.id) {
                            return {
                              ...post,
                              isSaved,
                            };
                          } else {
                            return post;
                          }
                        }),
                      },
                    };
                  }
                }),
              },
            }
          );
        });
      }
    },
    [post?.id, setPost],
  );

  const unsavePostContext = useCallback(
    ({ isSaved }: SavePostContextProps) => {
      if (post?.id === isSaved?.post.id) {
        setPost(prevPost => {
          return prevPost && { ...prevPost, isSaved: undefined };
        });
      } else {
        // TODO: fix the type
        // @ts-expect-error ignore
        setPost(prevPost => {
          return (
            prevPost && {
              ...prevPost,
              replies: {
                ...prevPost.replies,
                posts: prevPost.replies?.posts?.map(post => {
                  if (post?.id === isSaved?.post.id) {
                    return {
                      ...post,
                      isSaved: undefined,
                    };
                  } else {
                    return {
                      ...post,
                      replies: {
                        ...post.replies,
                        posts: post.replies?.posts?.map(post => {
                          if (post?.id === isSaved?.post.id) {
                            return {
                              ...post,
                              isSaved: undefined,
                            };
                          } else {
                            return post;
                          }
                        }),
                      },
                    };
                  }
                }),
              },
            }
          );
        });
      }
    },
    [post?.id, setPost],
  );

  return {
    post,
    setPost,
    likePostContext,
    unlikePostContext,
    savePostContext,
    unsavePostContext,
  };
}
