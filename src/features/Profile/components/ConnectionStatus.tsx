import type { User } from "@/@types/user";
import ConnectionButton from "./ConnectionButton";
import styles from "../Profile.module.css";
import { useConnection } from "../hooks/useConnection";
import { ConnectionButtons } from "../@types";

type Props = {
  connectionStatus: User["connectionStatus"];
};

export default function ConnectionStatus({ connectionStatus }: Props) {
  const { follow, unfollow, followUserResponse, unfollowUserResponse } =
    useConnection();

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
    <ConnectionButton {...connectionButtons["following"]}>
      Following
    </ConnectionButton>
  ) : connectionStatus == 1 ? (
    <ConnectionButton {...connectionButtons["requested"]}>
      Requested
    </ConnectionButton>
  ) : (
    <ConnectionButton {...connectionButtons["follow"]}>Follow</ConnectionButton>
  );
}
