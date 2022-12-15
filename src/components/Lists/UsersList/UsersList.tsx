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
    itemClassName,
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
        <User
          // @ts-expect-error ignore
          key={node[dataKey].id}
          // @ts-expect-error ignore
          user={node[dataKey]}
          className={itemClassName}
          showFollow
        />
      ))}
    </ListWrapper>
  );
}
