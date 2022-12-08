import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { Placeholder } from "@components/Placeholder";
import { User } from "@components/User";
import styles from "../Search.module.css";
import type { SearchResult } from "../Search.types";
import isEmpty from "lodash/isEmpty";

interface Props {
  user?: SearchResult["user"];
}

export function Users({ user }: Props) {
  const { t } = useTranslation("common");

  return !isEmpty(user?.edges) ? (
    <Card shadow={!isMobile} rounded={!isMobile} className={styles.users}>
      {user?.edges?.map(({ node }) => (
        <User key={node.id} user={node} />
      ))}
    </Card>
  ) : (
    <Placeholder
      className={styles.placeholder}
      title={t("noResultFound")}
      icon="Users"
    />
  );
}
