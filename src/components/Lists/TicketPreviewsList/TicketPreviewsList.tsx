import { TicketPreview } from "@components/TicketPreview";
import { ListWrapper } from "../ListWrapper";
import type { TicketPreviewsListProps } from "./TicketPreviewsList.types";
import isEmpty from "lodash/isEmpty";

export function TicketPreviewsList(props: TicketPreviewsListProps) {
  const { isLoading, data, scrollableTarget, getMoreData, placeholder } = props;

  return (
    <ListWrapper
      data={data}
      isEdgesExists={!isEmpty(data?.edges)}
      isLoading={isLoading}
      placeholder={placeholder}
      scrollableTarget={scrollableTarget}
      getMoreData={getMoreData}
    >
      {data?.edges?.map(({ node }) => (
        <TicketPreview key={node.id} ticket={node} />
      ))}
    </ListWrapper>
  );
}
