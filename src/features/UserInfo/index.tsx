import type { User } from "@/@types/user";
import Avatar from "@/components/Avatar";
import { useAccountContext } from "@/context/AccountContext";
import { XIcon } from "@heroicons/react/solid";
import { ActionButtons } from "./@types";
import ActionButton from "./components/ActionButton";
import { useActions } from "./hooks/useActions";
import styles from "./UserInfo.module.css";
import Link from "next/link";

type Props = {
  user: User;
  showAccept?: boolean;
  showDelete?: boolean;
  showFollow?: boolean;
};

export default function UserInfo({
  user: { id, username, fullname, connectionStatus },
  showAccept,
  showDelete,
  showFollow,
}: Props) {
  const { user } = useAccountContext();
  const {
    follow,
    unfollow,
    accept,
    reject,
    followUserResponse,
    unfollowUserResponse,
    acceptUserResponse,
    rejectUserResponse,
  } = useActions({ id });

  const actionButtons: ActionButtons = {
    follow: {
      className: styles.accept,
      onClick: follow,
      loading: followUserResponse.loading,
    },
    following: {
      className: styles.following,
      onClick: unfollow,
      loading: unfollowUserResponse.loading,
    },
    requested: {
      className: styles.accept,
      onClick: unfollow,
      loading: unfollowUserResponse.loading,
    },
    accept: {
      className: styles.accept,
      onClick: accept,
      loading: acceptUserResponse.loading,
    },
    reject: {
      className: styles.reject,
      onClick: reject,
      loading: rejectUserResponse.loading,
    },
  };
  return (
    <div className={styles.container}>
      {username && (
        <Link href={`/${username}`}>
          <a className={styles.userInfo}>
            <Avatar className={styles.avatar} />
            <div>
              <div className={styles.fullname}>{fullname}</div>
              <div className={styles.username}>@{username}</div>
            </div>
          </a>
        </Link>
      )}
      {user?.id !== id && (
        <div className="flex">
          {showFollow && !connectionStatus && (
            <ActionButton {...actionButtons["follow"]}>Follow</ActionButton>
          )}
          {showFollow && connectionStatus == 2 && (
            <ActionButton {...actionButtons["following"]}>
              Following
            </ActionButton>
          )}
          {showFollow && connectionStatus == 1 && (
            <ActionButton {...actionButtons["requested"]}>
              Requested
            </ActionButton>
          )}
          {showAccept && (
            <ActionButton {...actionButtons["accept"]}>Confirm</ActionButton>
          )}
          {showDelete && (
            <ActionButton {...actionButtons["reject"]}>
              <XIcon className={styles.rejectIcon} />
            </ActionButton>
          )}
        </div>
      )}
    </div>
  );
}
