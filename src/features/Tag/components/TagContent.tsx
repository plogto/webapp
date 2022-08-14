import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { ID } from "@constants";
import { Card } from "@components/Card";
import { Posts } from "@components/Posts";
import styles from "../Tag.module.css";
import type { TagContentProps } from "../Tag.types";

export function TagContent(props: TagContentProps) {
  const { tabs } = props;
  const { asPath } = useRouter();

  return (
    <Card className={styles.tagContent} shadow={!isMobile} rounded={!isMobile}>
      <div>
        {tabs.map(
          ({ href, data: { data, isLoading }, getMoreData, emptyStatus }) =>
            asPath === href && (
              <Posts
                key={data?.pageInfo.endCursor}
                posts={data}
                isLoading={isLoading}
                getMoreData={getMoreData}
                emptyStatus={emptyStatus}
                scrollableTarget={ID.PROFILE_CARDS}
              />
            ),
        )}
      </div>
    </Card>
  );
}
