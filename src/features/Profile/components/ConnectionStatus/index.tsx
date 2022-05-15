import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { LinkButton } from "@components/Buttons/LinkButton";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { User } from "@t/user";
import type { ConnectionButtons } from "../../@types";
import styles from "../../Profile.module.css";
import { useConnection } from "../../hooks/useConnection";

type Props = {
  user: {
    id: User["id"];
    connectionStatus: User["connectionStatus"];
  };
};

export function ConnectionStatus(props: Props) {
  const {
    user: { id: userId, connectionStatus },
  } = props;
  const { follow, unfollow, followUserResponse, unfollowUserResponse } =
    useConnection({ userId });
  const { user } = useAccountContext();

  const { t } = useTranslation("connection");

  const connectionButtons: ConnectionButtons = {
    following: {
      className: styles.following,
      onClick: unfollow,
      loading: unfollowUserResponse.loading,
    },
    requested: {
      className: styles.follow,
      onClick: unfollow,
      loading: unfollowUserResponse.loading,
    },
    follow: {
      className: styles.follow,
      onClick: follow,
      loading: followUserResponse.loading,
    },
  };

  return connectionStatus == 2 ? (
    <Button {...connectionButtons["following"]}>
      {t("buttons.following")}
    </Button>
  ) : connectionStatus == 1 ? (
    <Button {...connectionButtons["requested"]}>
      {t("buttons.requested")}
    </Button>
  ) : user ? (
    <Button {...connectionButtons["follow"]}>{t("buttons.follow")}</Button>
  ) : (
    <LinkButton href={PageUrls.LOGIN} {...connectionButtons["follow"]}>
      {t("buttons.follow")}
    </LinkButton>
  );
}
