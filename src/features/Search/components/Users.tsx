import styles from "../Search.module.css";
import UserInfo from "@/features/UserInfo";
import type { SearchResult } from "../@types";
import Link from "next/link";

type Props = {
  user?: SearchResult["user"];
};

export default function Users({ user }: Props) {
  return user ? (
    <div className={styles.users}>
      {user.users?.map(user => (
        <Link key={user.id} href={user.username}>
          <a>
            <UserInfo user={user} />
          </a>
        </Link>
      ))}
    </div>
  ) : null;
}
