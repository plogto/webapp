import { createContext, ReactNode, useContext, useState } from "react";

const FollowRequestsContext = createContext<FollowRequestsContext>([]);
const FollowRequestsContextSetState = createContext<SetFollowRequestsContext>({
  setFollowRequests: () => {},
});

type Props = {
  children: ReactNode;
};

export function FollowRequestsProvider({ children }: Props) {
  const [followRequestsState, setFollowRequestsState] =
    useState<FollowRequestsContext>([]);

  return (
    <FollowRequestsContext.Provider value={followRequestsState}>
      <FollowRequestsContextSetState.Provider
        value={{
          setFollowRequests: setFollowRequestsState,
        }}
      >
        {children}
      </FollowRequestsContextSetState.Provider>
    </FollowRequestsContext.Provider>
  );
}

function useFollowRequestsState() {
  const followRequests = useContext(FollowRequestsContext);

  return followRequests;
}

function useFollowRequestsSetState() {
  const { setFollowRequests } = useContext(FollowRequestsContextSetState);

  return { setFollowRequests };
}

export function useFollowRequestsContext() {
  const followRequests = useFollowRequestsState();
  const { setFollowRequests } = useFollowRequestsSetState();

  const deleteFollowRequestById = (id: string) => {
    setFollowRequests(
      followRequests.filter(followRequest => followRequest.id != id),
    );
  };

  return { followRequests, setFollowRequests, deleteFollowRequestById };
}
