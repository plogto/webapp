import { createContext, ReactNode, useContext, useState } from "react";

const initialSavedPosts: SavedPostsContext = {
  savedPosts: [],
};

const SavedPostsContext = createContext(initialSavedPosts);
const SavedPostsContextSetState = createContext<SetSavedPostsContext>({
  setSavedPosts: () => {},
});

interface Props {
  children: ReactNode;
}

export function SavedPostsProvider({ children }: Props) {
  const [savedPosts, setSavedPosts] = useState<SavedPostsContext["savedPosts"]>(
    initialSavedPosts.savedPosts,
  );

  return (
    <SavedPostsContext.Provider value={{ savedPosts }}>
      <SavedPostsContextSetState.Provider
        value={{
          setSavedPosts,
        }}
      >
        {children}
      </SavedPostsContextSetState.Provider>
    </SavedPostsContext.Provider>
  );
}

export function useSavedPostsContext() {
  const { savedPosts } = useContext(SavedPostsContext);
  const { setSavedPosts } = useContext(SavedPostsContextSetState);

  return { savedPosts, setSavedPosts };
}
