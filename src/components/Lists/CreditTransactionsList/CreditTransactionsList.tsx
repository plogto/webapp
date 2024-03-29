import { CreditTransaction } from "@components/CreditTransaction";
import { ListWrapper } from "../ListWrapper";
import type { CreditTransactionsListProps } from "./CreditTransactionsList.types";
import isEmpty from "lodash/isEmpty";

export function CreditTransactionsList(props: CreditTransactionsListProps) {
  const { data, scrollableTarget, getMoreData, isLoading, placeholder } = props;

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
        <CreditTransaction key={node.id} creditTransaction={node} />
      ))}
    </ListWrapper>
  );
}
