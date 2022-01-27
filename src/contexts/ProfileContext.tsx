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
  const [user, setUser] = useState<ProfileContext["user"]>();
  const [posts, setPosts] = useState<ProfileContext["posts"]>();

  return (
    <ProfileContext.Provider
      value={{
        user,
        posts,
      }}
    >
      <ProfileContextSetState.Provider
        value={{
          setUser,
          setPosts,
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
