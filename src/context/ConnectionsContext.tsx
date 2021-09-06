import React, { createContext, useContext, useState, ReactNode } from "react";
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

const ConnectionsProvider = ({ children }: Props) => {
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
      }}>
      <ConnectionsContextSetState.Provider
        value={{
          setFollowers: setFollowersState,
          setFollowing: setFollowingState,
        }}>
        {children}
      </ConnectionsContextSetState.Provider>
    </ConnectionsContext.Provider>
  );
};

const useConnectionsState = () => {
  const { followers, following } = useContext(ConnectionsContext);

  return { followers, following };
};

const useConnectionsSetState = () => {
  const { setFollowers, setFollowing } = useContext(ConnectionsContextSetState);

  return { setFollowers, setFollowing };
};

const useConnectionsContext = () => {
  const { followers, following } = useConnectionsState();
  const { setFollowers, setFollowing } = useConnectionsSetState();

  return { followers, following, setFollowers, setFollowing };
};

export { useConnectionsContext };
export default ConnectionsProvider;
