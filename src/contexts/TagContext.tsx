import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import type {
  GetPostsByTagNameQuery,
  GetPostsByTagNameQueryRequest,
} from "@graphql/@types/post";
import type {
  GetTagByTagNameQuery,
  GetTagByTagNameQueryRequest,
} from "@graphql/@types/tag";
import { GET_POSTS_BY_TAG_NAME } from "@graphql/post";
import { GET_TAG_BY_TAG_NAME } from "@graphql/tag";

const initialTag: TagContext = {
  tagData: {},
  posts: {},
};

const TagContext = createContext(initialTag);
const TagContextSetState = createContext<SetTagContext>({
  setTagData: () => {},
  setPosts: () => {},
});

interface Props {
  children: ReactNode;
}

export function TagProvider({ children }: Props) {
  const [tagData, setTagData] = useState<TagContext["tagData"]>(
    initialTag.tagData,
  );
  const [posts, setPosts] = useState<TagContext["posts"]>(initialTag.posts);

  return (
    <TagContext.Provider value={{ tagData, posts }}>
      <TagContextSetState.Provider
        value={{
          setTagData,
          setPosts,
        }}
      >
        {children}
      </TagContextSetState.Provider>
    </TagContext.Provider>
  );
}

export function useTagContext() {
  const { query } = useRouter();
  const tagName = query.tagName as string;
  const variables = useMemo(
    () => ({
      tagName,
    }),
    [tagName],
  );

  const { tagData, posts } = useContext(TagContext);
  const { setTagData, setPosts } = useContext(TagContextSetState);

  const [getTagData, getTagDataResponse] = useLazyQuery<
    GetTagByTagNameQuery,
    GetTagByTagNameQueryRequest
  >(GET_TAG_BY_TAG_NAME);

  const [getPosts, getPostsResponse] = useLazyQuery<
    GetPostsByTagNameQuery,
    GetPostsByTagNameQueryRequest
  >(GET_POSTS_BY_TAG_NAME);

  useEffect(() => {
    if (tagName) {
      getPosts({
        variables,
      });
      getTagData({
        variables,
      });
    }
  }, [getPosts, getTagData, tagName, variables]);

  useEffect(() => {
    if (getTagDataResponse.data) {
      setTagData({
        isLoading: getTagDataResponse.loading,
        data: getTagDataResponse.data?.getTagByTagName,
      });
    }
  }, [getTagDataResponse.data, getTagDataResponse.loading, setTagData]);

  useEffect(() => {
    if (getPostsResponse.data) {
      const newData: PostData = {
        isLoading: getPostsResponse.loading,
        data: getPostsResponse.data?.getPostsByTagName?.posts,
        pagination: getPostsResponse.data?.getPostsByTagName?.pagination,
      };
      setPosts((prevState: PostData) => ({ ...prevState, ...newData }));
    }
  }, [getPostsResponse.data, getPostsResponse.loading, setPosts]);

  const getMoreData = () => {
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
            ? [...prevState.data, ...data.getPostsByTagName.posts]
            : data.getPostsByTagName.posts,
          pagination: data.getPostsByTagName.pagination,
        }));
      });
  };

  return {
    tagName,
    tagData,
    posts,
    getMoreData,
  };
}
