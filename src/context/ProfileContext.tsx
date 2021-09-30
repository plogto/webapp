import { createContext, ReactNode, useContext, useState } from "react";

const ProfileContext = createContext<ProfileContext>({});
const ProfileContextSetState = createContext<SetProfileContext>({
  setUser: () => {},
  setPosts: () => {},
});

type Props = {
  children: ReactNode;
};

export function ProfileProvider({ children }: Props) {
  const [userState, setUserState] = useState<ProfileContext["user"]>();
  const [postsState, setPostsState] = useState<ProfileContext["posts"]>();

  return (
    <ProfileContext.Provider
      value={{
        user: userState,
        posts: postsState,
      }}
    >
      <ProfileContextSetState.Provider
        value={{
          setUser: setUserState,
          setPosts: setPostsState,
        }}
      >
        {children}
      </ProfileContextSetState.Provider>
    </ProfileContext.Provider>
  );
}

function useProfileState() {
  const { user, posts } = useContext(ProfileContext);

  return { user, posts };
}

function useProfileSetState() {
  const { setUser, setPosts } = useContext(ProfileContextSetState);

  return { setUser, setPosts };
}

export function useProfileContext() {
  const { user, posts } = useProfileState();
  const { setUser, setPosts } = useProfileSetState();

  return { user, posts, setUser, setPosts };
}
