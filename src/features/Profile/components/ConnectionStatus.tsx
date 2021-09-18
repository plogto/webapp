import type { User } from "@t/user";
import { Button } from "@components/Button";
import styles from "../Profile.module.css";
import { useConnection } from "../hooks/useConnection";
import type { ConnectionButtons } from "../@types";
import { useTranslation } from "react-i18next";
import { useAccountContext } from "@context/AccountContext";
import { LinkButton } from "@components/LinkButton";
import { PageUrls } from "@enums/pages";

type Props = {
  connectionStatus: User["connectionStatus"];
};

export function ConnectionStatus({ connectionStatus }: Props) {
  const { follow, unfollow, followUserResponse, unfollowUserResponse } =
    useConnection();
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
