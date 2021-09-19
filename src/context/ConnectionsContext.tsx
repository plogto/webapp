import { createContext, ReactNode, useContext, useState } from "react";

import type { Connections, SetConnections } from "./@types/connections";

const initialConnections = {
  followers: {},
  following: {},
};

const ConnectionsContext = createContext<Connections>(initialConnections);
const ConnectionsContextSetState = createContext<SetConnections>({
  setFollowers: () => {},
  setFollowing: () => {},
});

type Props = {
  children: ReactNode;
};

export function ConnectionsProvider({ children }: Props) {
  const [followersState, setFollowersState] = useState<
    Connections["followers"]
  >(initialConnections.followers);
  const [followingState, setFollowingState] = useState<
    Connections["following"]
  >(initialConnections.following);

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
