import styles from "../Search.module.css";
import { Card } from "@components/Card";
import { User } from "@components/User";
import type { SearchResult } from "../@types";

type Props = {
  user?: SearchResult["user"];
};

export function Users({ user }: Props) {
  return user?.users?.length ? (
    <Card className={styles.users}>
      {user.users?.map(user => (
        <User key={user.id} user={user} />
      ))}
    </Card>
  ) : null;
}
