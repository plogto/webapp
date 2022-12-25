import { useCallback, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  AddTicketMessageMutation,
  AddTicketMessageMutationRequest,
  CreateTicketMutation,
  CreateTicketMutationRequest,
} from "@graphql/@types/ticket";
import {
  ADD_TICKET_MESSAGE,
  CREATE_TICKET,
  GET_TICKETS,
  GET_TICKET_MESSAGES_BY_TICKET_URL,
} from "@graphql/ticket";
import { useNavigator } from "@hooks/useNavigator";
import { useUploadFiles } from "@hooks/useUploadFiles";
import type { AddTicketFormProps, UseAddTicketProps } from "./AddTicket.types";
import isEmpty from "lodash/isEmpty";

export function useAddTicket(props: UseAddTicketProps) {
  const { showSubject, ticket, onCloseButton } = props;
  const formMethods = useForm<AddTicketFormProps>({ mode: "all" });
  const [attachmentPreview, setAttachmentPreview] = useState<Blob>();
  const {
    uploadFiles,
    uploadFilesResponse: { loading: uploadFilesLoading },
  } = useUploadFiles();
  const { formatTicketPageRoute } = useNavigator();
  const { push } = useRouter();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const [createTicket, { loading: createTicketLoading }] = useMutation<
    CreateTicketMutation,
    CreateTicketMutationRequest
  >(CREATE_TICKET);

  const [addTicketMessage, { loading: addTicketMessageLoading }] = useMutation<
    AddTicketMessageMutation,
    AddTicketMessageMutationRequest
  >(ADD_TICKET_MESSAGE);

  const loading = useMemo(
    () => createTicketLoading || addTicketMessageLoading || uploadFilesLoading,
    [addTicketMessageLoading, createTicketLoading, uploadFilesLoading],
  );

  const removeAttachmentPreview = useCallback(() => {
    setAttachmentPreview(undefined);
  }, []);

  const handleAddTicketMessage = (
    formData: AddTicketFormProps,
    attachment?: string[],
  ) => {
    ticket?.id &&
      addTicketMessage({
        variables: {
          ticketId: ticket.id,
          message: formData.message,
          attachment: attachment || [],
        },
        refetchQueries: [
          { query: GET_TICKETS },
          {
            query: GET_TICKET_MESSAGES_BY_TICKET_URL,
            variables: { ticketUrl: ticket?.url },
          },
        ],
      }).finally(() => {
        onCloseButton();
      });
  };

  const handleCreateTicket = (
    formData: AddTicketFormProps,
    attachment?: string[],
  ) => {
    formData.subject &&
      createTicket({
        variables: {
          subject: formData.subject,
          message: formData.message,
          attachment: attachment || [],
        },
        refetchQueries: [{ query: GET_TICKETS }],
      }).then(({ data }) => {
        onCloseButton();
        if (data?.createTicket?.url) {
          push(formatTicketPageRoute(data.createTicket.url));
        }
      });
  };

  const handleTicketRequest = (
    formData: AddTicketFormProps,
    attachment?: string[],
  ) => {
    if (showSubject) {
      handleCreateTicket(formData, attachment);
    } else {
      handleAddTicketMessage(formData, attachment);
    }
    removeAttachmentPreview();
    formMethods.reset();
  };

  const onSubmit = (formData: AddTicketFormProps) => {
    if (!attachmentPreview) {
      handleTicketRequest(formData);
    } else {
      const files = [
        new File([attachmentPreview], "file.png", {
          type: "image/png",
        }),
      ];
      uploadFiles({
        variables: { files },
      }).then(({ data }) => {
        if (!isEmpty(data?.uploadFiles)) {
          handleTicketRequest(
            formData,
            data?.uploadFiles?.map(({ id }) => id) || [],
          );
        }
      });
    }
  };

  return {
    formMethods,
    onSubmit,
    attachmentPreview,
    setAttachmentPreview,
    inputFileRef,
    removeAttachmentPreview,
    loading,
  };
}
