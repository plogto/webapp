import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { Edge } from "@t";
import { useLazyQuery } from "@apollo/client";
import type {
  GetNotificationsQuery,
  GetNotificationsQueryRequest,
} from "@graphql/@types/notification";
import { GET_NOTIFICATIONS } from "@graphql/notification";
import type { Notification } from "@t/notification";
import { useAccountContext } from "./AccountContext";

const initialNotifications: NotificationsContext = {
  edges: [],
  pageInfo: {},
};

const NotificationsContext =
  createContext<NotificationsContext>(initialNotifications);

const NotificationsContextSetState = createContext<SetNotificationsContext>({
  setEdges: () => {},
  setUnreadNotificationsCount: () => {},
  setPageInfo: () => {},
  setTotalCount: () => {},
});

interface Props {
  children: ReactNode;
}
// TODO: refactor this context
export function NotificationsProvider({ children }: Props) {
  const [edges, setEdges] = useState<NotificationsContext["edges"]>(
    initialNotifications.edges,
  );
  const [pageInfo, setPageInfo] = useState<NotificationsContext["pageInfo"]>(
    initialNotifications.pageInfo,
  );
  const [totalCount, setTotalCount] = useState<
    NotificationsContext["totalCount"]
  >(initialNotifications.totalCount);
  const [unreadNotificationsCount, setUnreadNotificationsCount] =
    useState<NotificationsContext["unreadNotificationsCount"]>();

  return (
    <NotificationsContext.Provider
      value={{ edges, pageInfo, unreadNotificationsCount, totalCount }}
    >
      <NotificationsContextSetState.Provider
        value={{
          setEdges,
          setPageInfo,
          setUnreadNotificationsCount,
          setTotalCount,
        }}
      >
        {children}
      </NotificationsContextSetState.Provider>
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  const { edges, pageInfo, unreadNotificationsCount, totalCount } =
    useContext(NotificationsContext);
  const { setEdges, setPageInfo, setUnreadNotificationsCount, setTotalCount } =
    useContext(NotificationsContextSetState);
  const { user } = useAccountContext();

  const [getNotifications, { data, fetchMore }] = useLazyQuery<
    GetNotificationsQuery,
    GetNotificationsQueryRequest
  >(GET_NOTIFICATIONS);

  useEffect(() => {
    if (user) {
      getNotifications().then(({ data }) => {
        setEdges(data?.getNotifications?.edges || []);
        setPageInfo(data?.getNotifications?.pageInfo || {});
        setTotalCount(data?.getNotifications?.totalCount);
      });
    }
  }, []);

  useEffect(() => {
    if (data?.getNotifications?.unreadNotificationsCount) {
      setUnreadNotificationsCount(
        data.getNotifications.unreadNotificationsCount,
      );
    }
  }, [
    data?.getNotifications.unreadNotificationsCount,
    setUnreadNotificationsCount,
  ]);

  const getMoreData = () => {
    return fetchMore({
      variables: {
        after: pageInfo.endCursor,
      },
    }).then(({ data }) => {
      const newNotifications = data?.getNotifications?.edges || [];
      setEdges(prevNotifications =>
        prevNotifications.length
          ? prevNotifications.concat(newNotifications)
          : newNotifications,
      );
      setPageInfo(data.getNotifications.pageInfo);
    });
  };

  const pushNotification = (notification: Edge<Notification>) => {
    setEdges(prevNotifications =>
      prevNotifications ? [notification, ...prevNotifications] : [notification],
    );
    setUnreadNotificationsCount(prevCount => (prevCount ? prevCount + 1 : 1));
  };

  return {
    unreadNotificationsCount,
    getMoreData,
    pushNotification,
    totalCount,
    edges,
    pageInfo,
  };
}
