import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import type { MenuProps } from "@components/Menu/Menu.types";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetTicketMessagesByTicketUrlQuery,
  GetTicketMessagesByTicketUrlQueryRequest,
} from "@graphql/@types/ticket";
import { GET_TICKET_MESSAGES_BY_TICKET_URL } from "@graphql/ticket";
import type { Placeholder } from "@t/placeholder";

export function useTicket() {
  const { user } = useAccountContext();
  const { query } = useRouter();
  const ticketUrl = query.ticketUrl as string;
  const variables = useMemo(() => ({ ticketUrl }), [ticketUrl]);

  const [getTicketMessages, getTicketMessagesResponse] = useLazyQuery<
    GetTicketMessagesByTicketUrlQuery,
    GetTicketMessagesByTicketUrlQueryRequest
  >(GET_TICKET_MESSAGES_BY_TICKET_URL);
  const { t } = useTranslation("support");

  useEffect(() => {
    if (user) {
      getTicketMessages({ variables });
    }
  }, [getTicketMessages, user, variables]);

  const ticketMessages = useMemo(
    () => getTicketMessagesResponse.data?.getTicketMessagesByTicketUrl,
    [getTicketMessagesResponse.data?.getTicketMessagesByTicketUrl],
  );

  const loading = useMemo(
    () => getTicketMessagesResponse.loading,
    [getTicketMessagesResponse.loading],
  );

  const getMoreData = useCallback(() => {
    return getTicketMessagesResponse.fetchMore({
      variables: {
        after:
          getTicketMessagesResponse?.data?.getTicketMessagesByTicketUrl
            ?.pageInfo.endCursor,
      },
    });
  }, [getTicketMessagesResponse]);

  const emptyStatus: Placeholder = useMemo(
    () => ({
      title: t("status.noTicketMessages.title"),
      icon: "Inbox",
    }),
    [t],
  );

  const filterMenuItems = useCallback((items: MenuProps["items"]) => items, []);

  return { ticketMessages, loading, getMoreData, emptyStatus, filterMenuItems };
}
