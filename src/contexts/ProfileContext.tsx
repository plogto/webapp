import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { ProfileActiveTab } from "@enums";
import { useLazyQuery } from "@apollo/client";
import {
  GetPostsByUsernameQuery,
  GetPostsByUsernameQueryRequest,
  GetSavedPostsQuery,
  GetSavedPostsQueryRequest,
} from "@graphql/@types/post";
import { GET_POSTS_BY_USERNAME, GET_SAVED_POSTS } from "@graphql/post";

const initialProfile: ProfileContext = {
  activeTab: ProfileActiveTab.POSTS,
  posts: {},
  savedPosts: {},
};

const ProfileContext = createContext(initialProfile);
const ProfileContextSetState = createContext<SetProfileContext>({
  setActiveTab: () => {},
  setPosts: () => {},
  setSavedPosts: () => {},
});

interface Props {
  children: ReactNode;
}

export function ProfileProvider({ children }: Props) {
  const [activeTab, setActiveTab] = useState<ProfileContext["activeTab"]>(
    initialProfile.activeTab,
  );
  const [posts, setPosts] = useState<ProfileContext["posts"]>(
    initialProfile.posts,
  );
  const [savedPosts, setSavedPosts] = useState<ProfileContext["savedPosts"]>(
    initialProfile.savedPosts,
  );

  return (
    <ProfileContext.Provider value={{ activeTab, posts, savedPosts }}>
      <ProfileContextSetState.Provider
        value={{
          setActiveTab,
          setPosts,
          setSavedPosts,
        }}
      >
        {children}
      </ProfileContextSetState.Provider>
    </ProfileContext.Provider>
  );
}

export function useProfileContext() {
  const { query } = useRouter();
  const username = query.username as string;
  const variables = useMemo(
    () => ({
      username,
    }),
    [username],
  );

  const { activeTab, posts, savedPosts } = useContext(ProfileContext);
  const { setActiveTab, setPosts, setSavedPosts } = useContext(
    ProfileContextSetState,
  );

  const [getPosts, getPostsResponse] = useLazyQuery<
    GetPostsByUsernameQuery,
    GetPostsByUsernameQueryRequest
  >(GET_POSTS_BY_USERNAME);

  const [getSavedPosts, getSavedResponse] = useLazyQuery<
    GetSavedPostsQuery,
    GetSavedPostsQueryRequest
  >(GET_SAVED_POSTS);

  useEffect(() => {
    if (username) {
      getPosts({
        variables,
      });
      getSavedPosts();
    }
  }, [getPosts, getSavedPosts, username, variables]);

  useEffect(() => {
    if (getPostsResponse.data) {
      const newData: PostData = {
        isLoading: getPostsResponse.loading,
        data: getPostsResponse.data?.getPostsByUsername.posts,
        pagination: getPostsResponse.data?.getPostsByUsername.pagination,
      };
      setPosts((prevState: PostData) => ({ ...prevState, ...newData }));
    }
  }, [getPostsResponse.data, getPostsResponse.loading, setPosts]);

  useEffect(() => {
    if (getSavedResponse.data) {
      const newData: PostData = {
        isLoading: getSavedResponse.loading,
        data: getSavedResponse.data?.getSavedPosts.posts,
        pagination: getSavedResponse.data?.getSavedPosts.pagination,
      };
      setSavedPosts((prevState: PostData) => ({ ...prevState, ...newData }));
    }
  }, [getSavedResponse.data, getSavedResponse.loading, setSavedPosts]);

  const getMoreData = (type: ProfileActiveTab) => {
    switch (type) {
      case ProfileActiveTab.POSTS:
        return getPostsResponse
          .fetchMore({
            variables: {
              ...variables,
              page: posts?.pagination?.nextPage,
            },
          })
          .then(({ data }) => {
            setPosts((prevState: PostData) => ({
              ...prevState,
              data: prevState.data?.length
                ? [...prevState.data, ...data.getPostsByUsername.posts]
                : data.getPostsByUsername.posts,
              pagination: data.getPostsByUsername.pagination,
            }));
          });
      case ProfileActiveTab.SAVED:
        return getSavedResponse
          .fetchMore({
            variables: {
              page: savedPosts?.pagination?.nextPage,
            },
          })
          .then(({ data }) => {
            setPosts((prevState: PostData) => ({
              ...prevState,
              data: prevState.data?.length
                ? [...prevState.data, ...data.getSavedPosts.posts]
                : data.getSavedPosts.posts,
              pagination: data.getSavedPosts.pagination,
            }));
          });
    }
  };

  return {
    username,
    activeTab,
    setActiveTab,
    posts,
    savedPosts,
    getMoreData,
  };
}
