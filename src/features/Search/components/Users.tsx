import styles from "../Search.module.css";
import { UserInfo } from "@features/UserInfo";

import type { SearchResult } from "../@types";

type Props = {
  user?: SearchResult["user"];
};

export function Users({ user }: Props) {
  return user ? (
    <div className={styles.users}>
      {user.users?.map(user => (
        <UserInfo key={user.id} user={user} />
      ))}
    </div>
  ) : null;
}
