import { createContext, ReactNode, useContext, useState } from "react";

const initialConnections = {};

const ConnectionsContext =
  createContext<ConnectionsContext>(initialConnections);
const ConnectionsContextSetState = createContext<SetConnectionsContext>({
  setFollowers: () => {},
  setFollowing: () => {},
});

type Props = {
  children: ReactNode;
};

export function ConnectionsProvider({ children }: Props) {
  const [followersState, setFollowersState] =
    useState<ConnectionAndPagination>();
  const [followingState, setFollowingState] =
    useState<ConnectionAndPagination>();

  return (
    <ConnectionsContext.Provider
      value={{
        followers: followersState,
        following: followingState,
      }}
    >
      <ConnectionsContextSetState.Provider
        value={{
          setFollowers: setFollowersState,
          setFollowing: setFollowingState,
        }}
      >
        {children}
      </ConnectionsContextSetState.Provider>
    </ConnectionsContext.Provider>
  );
}

function useConnectionsState() {
  const { followers, following } = useContext(ConnectionsContext);

  return { followers, following };
}

function useConnectionsSetState() {
  const { setFollowers, setFollowing } = useContext(ConnectionsContextSetState);

  return { setFollowers, setFollowing };
}

export function useConnectionsContext() {
  const { followers, following } = useConnectionsState();
  const { setFollowers, setFollowing } = useConnectionsSetState();

  return { followers, following, setFollowers, setFollowing };
}
