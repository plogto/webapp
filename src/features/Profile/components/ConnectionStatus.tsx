import type { User } from "@/@types/user";
import Button from "@/components/Button";
import styles from "../Profile.module.css";
import { useConnection } from "../hooks/useConnection";
import { ConnectionButtons } from "../@types";
import { useTranslation } from "react-i18next";

type Props = {
  connectionStatus: User["connectionStatus"];
};

export default function ConnectionStatus({ connectionStatus }: Props) {
  const { follow, unfollow, followUserResponse, unfollowUserResponse } =
    useConnection();

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
  ) : (
    <Button {...connectionButtons["follow"]}>{t("buttons.follow")}</Button>
  );
}
