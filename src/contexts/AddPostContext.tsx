import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import type { Tag } from "@t/tag";
import type { User } from "@t/user";

const initialAddPost: AddPostContext = {
  suggestions: {
    active: "none",
    users: [],
    tags: [],
  },
};

const AddPostContext = createContext<AddPostContext>(initialAddPost);
const AddPostContextSetState = createContext<SetAddPostContext>({
  setSuggestions: () => {},
});

interface Props {
  children: ReactNode;
}

export function AddPostProvider({ children }: Props) {
  const [suggestions, setSuggestions] = useState<AddPostContext["suggestions"]>(
    initialAddPost.suggestions,
  );

  return (
    <AddPostContext.Provider
      value={{
        suggestions,
      }}
    >
      <AddPostContextSetState.Provider
        value={{
          setSuggestions,
        }}
      >
        {children}
      </AddPostContextSetState.Provider>
    </AddPostContext.Provider>
  );
}

export function useAddPostContext() {
  const { suggestions } = useContext(AddPostContext);
  const { setSuggestions } = useContext(AddPostContextSetState);

  const setUserSuggestions = useCallback(
    (users: User[]) => {
      setSuggestions(prevState => ({
        ...prevState,
        active: "users",
        users,
      }));
    },
    [setSuggestions],
  );

  const setTagSuggestions = useCallback(
    (tags: Tag[]) => {
      setSuggestions(prevState => ({
        ...prevState,
        active: "tags",
        tags: tags || [],
      }));
    },
    [setSuggestions],
  );

  const emptySuggestions = useCallback(() => {
    setSuggestions(prevState => ({
      ...prevState,
      active: "none",
    }));
  }, [setSuggestions]);

  return {
    suggestions,
    setSuggestions,
    setUserSuggestions,
    setTagSuggestions,
    emptySuggestions,
  };
}
