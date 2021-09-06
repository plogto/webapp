import React, { createContext, useContext, useState, ReactNode } from "react";
import type { Profile, SetProfile } from "@/context/@types/profile";

const ProfileContext = createContext<Profile>({});
const ProfileContextSetState = createContext<SetProfile>({
  setUser: () => {},
  setPosts: () => {},
});

type Props = {
  children: ReactNode;
};

const ProfileProvider = ({ children }: Props) => {
  const [userState, setUserState] = useState<Profile["user"]>();
  const [postsState, setPostsState] = useState<Profile["posts"]>();

  return (
    <ProfileContext.Provider
      value={{
        user: userState,
        posts: postsState,
      }}>
      <ProfileContextSetState.Provider
        value={{
          setUser: setUserState,
          setPosts: setPostsState,
        }}>
        {children}
      </ProfileContextSetState.Provider>
    </ProfileContext.Provider>
  );
};

const useProfileState = () => {
  const { user, posts } = useContext(ProfileContext);

  return { user, posts };
};

const useProfileSetState = () => {
  const { setUser, setPosts } = useContext(ProfileContextSetState);

  return { setUser, setPosts };
};

const useProfileContext = () => {
  const { user, posts } = useProfileState();
  const { setUser, setPosts } = useProfileSetState();

  return { user, posts, setUser, setPosts };
};

export { useProfileContext };
export default ProfileProvider;
