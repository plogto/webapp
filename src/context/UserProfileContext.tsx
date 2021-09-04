import React, { createContext, useContext, useState, ReactNode } from "react";
import type { UserProfile, SetUserProfile } from "@/@types/userProfile";

const UserProfileContext = createContext<UserProfile>({});
const UserProfileContextSetState = createContext<SetUserProfile>({
  setUser: () => {},
  setPosts: () => {},
});

type Props = {
  children: ReactNode;
};

const UserProfileProvider = ({ children }: Props) => {
  const [userState, setUserState] = useState<UserProfile["user"]>();
  const [postsState, setPostsState] = useState<UserProfile["posts"]>();

  return (
    <UserProfileContext.Provider
      value={{
        user: userState,
        posts: postsState,
      }}>
      <UserProfileContextSetState.Provider
        value={{
          setUser: setUserState,
          setPosts: setPostsState,
        }}>
        {children}
      </UserProfileContextSetState.Provider>
    </UserProfileContext.Provider>
  );
};

const useUserProfileState = () => {
  const { user, posts } = useContext(UserProfileContext);

  return { user, posts };
};

const useUserProfileSetState = () => {
  const { setUser, setPosts } = useContext(UserProfileContextSetState);

  return { setUser, setPosts };
};

const useUserProfileContext = () => {
  const { user, posts } = useUserProfileState();
  const { setUser, setPosts } = useUserProfileSetState();

  return { user, posts, setUser, setPosts };
};

export { useUserProfileContext };
export default UserProfileProvider;
