import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAccountContext } from "@contexts/AccountContext";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { Placeholder } from "@t/placeholder";

export function useCounters() {
  const { user } = useAccountContext();
  const { totalCount, edges, pageInfo, unreadNotificationsCount, getMoreData } =
    useNotificationsContext();

  const { t } = useTranslation("notifications");

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  const placeholder: Placeholder = useMemo(
    () => ({
      title: t("placeholders.noNotifications.title"),
      icon: "BellFill",
    }),
    [t],
  );

  const data = useMemo(
    () => ({
      edges,
      pageInfo,
      totalCount,
    }),
    [edges, pageInfo, totalCount],
  );

  return {
    data,
    followRequestsCount,
    unreadNotificationsCount,
    getMoreData,
    placeholder,
  };
}
