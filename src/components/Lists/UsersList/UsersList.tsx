import { User } from "@components/User";
import { ListWrapper } from "../ListWrapper";
import type { UsersListProps } from "./Users.types";
import isEmpty from "lodash/isEmpty";

export function UsersList(props: UsersListProps) {
  const {
    data,
    dataKey,
    isLoading,
    scrollableTarget,
    getMoreData,
    emptyStatus,
  } = props;

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
        <User key={node[dataKey].id} user={node[dataKey]} showFollow />
      ))}
    </ListWrapper>
  );
}
