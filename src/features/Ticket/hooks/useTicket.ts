import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ConfirmationModalType, TicketPermissionType } from "@enums";
import { useLazyQuery } from "@apollo/client";
import type { MenuProps } from "@components/Menu/Menu.types";
import { useAccountContext } from "@contexts/AccountContext";
import { useModalContext } from "@contexts/ModalContext";
import type {
  GetTicketMessagesByTicketUrlQuery,
  GetTicketMessagesByTicketUrlQueryRequest,
} from "@graphql/@types/ticket";
import { GET_TICKET_MESSAGES_BY_TICKET_URL } from "@graphql/ticket";
import type { Placeholder } from "@t/placeholder";
import type {
  ConfirmationModal,
  ConfirmationModals,
  UseTicketProps,
} from "../Ticket.types";
import { useUpdateTicketStatus } from "./useUpdateTicketStatus";

export function useTicket(props: UseTicketProps) {
  const { openAddTicket } = props;
  const { user } = useAccountContext();
  const { query } = useRouter();
  const ticketUrl = query.ticketUrl as string;
  const variables = useMemo(() => ({ ticketUrl }), [ticketUrl]);

  const [confirmationModal, setConfirmationModal] =
    useState<ConfirmationModal>();

  const [getTicketMessages, getTicketMessagesResponse] = useLazyQuery<
    GetTicketMessagesByTicketUrlQuery,
    GetTicketMessagesByTicketUrlQueryRequest
  >(GET_TICKET_MESSAGES_BY_TICKET_URL);

  const { t } = useTranslation(["support", "ticket"]);

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
      title: t("support:status.noTicketMessages.title"),
      icon: "Inbox",
    }),
    [t],
  );

  const filterMenuItems = useCallback(
    (items: MenuProps<TicketPermissionType>["items"]) => {
      const permissions = ticketMessages?.ticket.permissions;
      return items.filter(({ key }) => {
        if (permissions?.includes(key)) return true;

        return false;
      });
    },
    [ticketMessages?.ticket.permissions],
  );

  const { openTicket, closeTicket, approveTicket, solveTicket } =
    useUpdateTicketStatus({ ticketId: ticketMessages?.ticket.id });

  const { openModal } = useModalContext();

  const openConfirmationModal = (confirmationModal: ConfirmationModal) => {
    setConfirmationModal(confirmationModal);
    openModal();
  };

  const MENU_ITEMS: MenuProps<TicketPermissionType>["items"] = [
    {
      key: TicketPermissionType.NEW_MESSAGE,
      title: t("ticket:buttons.newMessage"),
      icon: "Plus",
      onClick: openAddTicket,
    },
    {
      key: TicketPermissionType.OPEN,
      title: t("ticket:buttons.openTicket"),
      icon: "Inbox",
      onClick: () => openConfirmationModal(CONFIRMATION_MODALS.OPEN),
    },
    {
      key: TicketPermissionType.APPROVE,
      title: t("ticket:buttons.approveTicket"),
      icon: "ThumbsUp",
      type: "success",
      onClick: () => openConfirmationModal(CONFIRMATION_MODALS.APPROVE),
    },
    {
      key: TicketPermissionType.SOLVE,
      title: t("ticket:buttons.solveTicket"),
      icon: "CheckCircle",
      type: "info",
      onClick: () => openConfirmationModal(CONFIRMATION_MODALS.SOLVE),
    },
    {
      key: TicketPermissionType.CLOSE,
      title: t("ticket:buttons.closeTicket"),
      icon: "XCircle",
      onClick: () => openConfirmationModal(CONFIRMATION_MODALS.CLOSE),
    },
  ];

  const CONFIRMATION_MODALS: ConfirmationModals = {
    [TicketPermissionType.OPEN]: {
      key: TicketPermissionType.OPEN,
      title: t("ticket:buttons.openTicket"),
      description: t("ticket:texts.areYouSure"),
      icon: "Inbox",
      onSubmit: openTicket,
      submitTitle: t("ticket:buttons.open"),
      isOpen: true,
    },
    [TicketPermissionType.APPROVE]: {
      key: TicketPermissionType.APPROVE,
      title: t("ticket:buttons.approveTicket"),
      description: t("ticket:texts.areYouSure"),
      icon: "ThumbsUp",
      type: ConfirmationModalType.SUCCESS,
      onSubmit: approveTicket,
      submitTitle: t("ticket:buttons.approve"),
    },
    [TicketPermissionType.SOLVE]: {
      key: TicketPermissionType.SOLVE,
      title: t("ticket:buttons.solveTicket"),
      description: t("ticket:texts.areYouSure"),
      icon: "CheckCircle",
      type: ConfirmationModalType.INFO,
      onSubmit: solveTicket,
      submitTitle: t("ticket:buttons.solve"),
    },
    [TicketPermissionType.CLOSE]: {
      key: TicketPermissionType.CLOSE,
      title: t("ticket:buttons.closeTicket"),
      description: t("ticket:texts.areYouSure"),
      icon: "XCircle",
      onSubmit: closeTicket,
      submitTitle: t("ticket:buttons.close"),
    },
  };

  return {
    ticketMessages,
    loading,
    getMoreData,
    emptyStatus,
    menuItems: filterMenuItems(MENU_ITEMS),
    confirmationModal,
  };
}
