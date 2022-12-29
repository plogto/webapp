import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import type { GetFollowRequestsQuery } from "@graphql/@types/connection";
import { GET_FOLLOW_REQUESTS } from "@graphql/connection";
import { Placeholder } from "@t/placeholder";

export function useFollowRequests() {
  const [getFollowRequests, { called, loading, data }] =
    useLazyQuery<GetFollowRequestsQuery>(GET_FOLLOW_REQUESTS);

  const { t } = useTranslation("followRequests");

  useEffect(() => {
    getFollowRequests();
  }, [getFollowRequests]);

  const followRequests = useMemo(
    () => data?.getFollowRequests,
    [data?.getFollowRequests],
  );

  const isLoading = useMemo(
    () => isDataLoading(called, loading),
    [called, loading],
  );

  const placeholder: Placeholder = useMemo(
    () => ({
      title: t("placeholders.noRequests.title"),
      icon: "Users",
    }),
    [t],
  );

  return { followRequests, isLoading, placeholder };
}
