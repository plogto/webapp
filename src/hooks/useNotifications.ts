import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAccountContext } from "@contexts/AccountContext";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { Status } from "@t/status";

export function useNotifications() {
  const { user } = useAccountContext();
  const { notifications, pagination, unreadNotificationsCount, getMoreData } =
    useNotificationsContext();

  const { t } = useTranslation("notifications");

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  const emptyStatus: Status = useMemo(
    () => ({
      title: t("status.noNotifications.title"),
      icon: "BellFill",
    }),
    [t],
  );

  return {
    notifications,
    pagination,
    followRequestsCount,
    unreadNotificationsCount,
    getMoreData,
    emptyStatus,
  };
}
