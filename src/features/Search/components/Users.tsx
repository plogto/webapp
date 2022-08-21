import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { User } from "@components/User";
import styles from "../Search.module.css";
import type { SearchResult } from "../Search.types";

interface Props {
  user?: SearchResult["user"];
}

export function Users({ user }: Props) {
  return user?.edges?.length ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.users}>
      {user.edges?.map(({ node }) => (
        <User key={node.id} user={node} />
      ))}
    </Card>
  ) : null;
}
