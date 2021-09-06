import React, { createContext, useContext, useState, ReactNode } from "react";
import type {
  FollowRequests,
  SetFollowRequests,
} from "@/context/@types/followRequests";

const FollowRequestsContext = createContext<FollowRequests>([]);
const FollowRequestsContextSetState = createContext<SetFollowRequests>({
  setFollowRequests: () => {},
});

type Props = {
  children: ReactNode;
};

const FollowRequestsProvider = ({ children }: Props) => {
  const [followRequestsState, setFollowRequestsState] =
    useState<FollowRequests>([]);

  return (
    <FollowRequestsContext.Provider value={followRequestsState}>
      <FollowRequestsContextSetState.Provider
        value={{
          setFollowRequests: setFollowRequestsState,
        }}>
        {children}
      </FollowRequestsContextSetState.Provider>
    </FollowRequestsContext.Provider>
  );
};

const useFollowRequestsState = () => {
  const followRequests = useContext(FollowRequestsContext);

  return followRequests;
};

const useFollowRequestsSetState = () => {
  const { setFollowRequests } = useContext(FollowRequestsContextSetState);

  return { setFollowRequests };
};

const useFollowRequestsContext = () => {
  const followRequests = useFollowRequestsState();
  const { setFollowRequests } = useFollowRequestsSetState();

  const deleteFollowRequestById = (id: string) => {
    setFollowRequests(
      followRequests.filter(followRequest => followRequest.id != id),
    );
  };

  return { followRequests, setFollowRequests, deleteFollowRequestById };
};

export { useFollowRequestsContext };
export default FollowRequestsProvider;
