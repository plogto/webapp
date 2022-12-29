import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import {
  GetTicketsQuery,
  GetTicketsQueryRequest,
} from "@graphql/@types/ticket";
import { GET_TICKETS } from "@graphql/ticket";
import { Placeholder } from "@t/placeholder";

export function useSupport() {
  const { user } = useAccountContext();
  const [getTickets, getTicketsResponse] = useLazyQuery<
    GetTicketsQuery,
    GetTicketsQueryRequest
  >(GET_TICKETS);
  const { t } = useTranslation("support");

  useEffect(() => {
    if (user) {
      getTickets();
    }
  }, [getTickets, user]);

  const tickets = useMemo(
    () => getTicketsResponse.data?.getTickets,
    [getTicketsResponse.data?.getTickets],
  );
  const getMoreData = useCallback(() => {
    return getTicketsResponse.fetchMore({
      variables: {
        after: getTicketsResponse?.data?.getTickets?.pageInfo.endCursor,
      },
    });
  }, [getTicketsResponse]);

  const placeholder: Placeholder = useMemo(
    () => ({
      title: t("placeholders.noTickets.title"),
      icon: "Inbox",
    }),
    [t],
  );

  const isLoading = useMemo(
    () => isDataLoading(getTicketsResponse.called, getTicketsResponse.loading),
    [getTicketsResponse.called, getTicketsResponse.loading],
  );

  return { tickets, getMoreData, placeholder, isLoading };
}
