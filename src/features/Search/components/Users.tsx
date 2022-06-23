import { isMobile } from "react-device-detect";
import { Card } from "@components/Card";
import { User } from "@components/User";
import styles from "../Search.module.css";
import type { SearchResult } from "../Search.types";

interface Props {
  user?: SearchResult["user"];
}

export function Users({ user }: Props) {
  return user?.users?.length ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.users}>
      {user.users?.map(user => (
        <User key={user.id} user={user} />
      ))}
    </Card>
  ) : null;
}
