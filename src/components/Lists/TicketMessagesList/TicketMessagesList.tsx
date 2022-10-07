import { TicketMessage } from "@components/TicketMessage";
import { ListWrapper } from "../ListWrapper";
import type { TicketMessagesListProps } from "./TicketMessagesList.types";
import isEmpty from "lodash/isEmpty";

export function TicketMessagesList(props: TicketMessagesListProps) {
  const { isLoading, data, scrollableTarget, getMoreData, emptyStatus } = props;

  return (
    <ListWrapper
      data={data}
      isEdgesExists={!isEmpty(data?.edges)}
      isLoading={isLoading}
      emptyStatus={emptyStatus}
      scrollableTarget={scrollableTarget}
      getMoreData={getMoreData}
    >
      {data?.edges?.map(({ node }) => (
        <TicketMessage key={node.id} ticketMessage={node} />
      ))}
    </ListWrapper>
  );
}
