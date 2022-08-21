import { createContext, ReactNode, useContext, useState } from "react";
import type { ConnectionsWithPageInfo } from "@t/connection";

const initialConnections = {};

const ConnectionsContext =
  createContext<ConnectionsContext>(initialConnections);
const ConnectionsContextSetState = createContext<SetConnectionsContext>({
  setFollowers: () => {},
  setFollowing: () => {},
});

interface Props {
  children: ReactNode;
}

export function ConnectionsProvider({ children }: Props) {
  const [followers, setFollowers] = useState<ConnectionsWithPageInfo>();
  const [following, setFollowing] = useState<ConnectionsWithPageInfo>();

  return (
    <ConnectionsContext.Provider
      value={{
        followers,
        following,
      }}
    >
      <ConnectionsContextSetState.Provider
        value={{
          setFollowers,
          setFollowing,
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
