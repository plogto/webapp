import { UserInfo } from "@components/UserInfo";
import styles from "./Suggestions.module.css";
import type { UsersSuggestionsProps } from "./Suggestions.types";

export function UsersSuggestions(props: UsersSuggestionsProps) {
  const { users, handleClickOnSuggestionItem } = props;

  return (
    <div className={styles.users}>
      {users.edges?.map(({ node: user }) => (
        <button
          type="button"
          onClick={() => handleClickOnSuggestionItem(`@${user.username}`)}
          key={user.id}
          className={styles.user}
        >
          <UserInfo user={user} size="small" />
        </button>
      ))}
    </div>
  );
}
