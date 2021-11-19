import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./UserInfo.module.css";
import { useActions } from "./hooks/useActions";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Button";
import { useAccountContext } from "@context/AccountContext";

import { useNavigation } from "@hooks/useNavigation";
import type { ActionButtons } from "./@types";
import type { User } from "@t/user";

type Props = {
  user: User;
  showAccept?: boolean;
  showDelete?: boolean;
  showFollow?: boolean;
};

export function UserInfo({
  user: { id, username, fullName, connectionStatus },
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
  const { t } = useTranslation("connection");
  const { formatProfilePageRoute } = useNavigation();

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
      className: styles.requested,
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
    <div className={styles.wrapper}>
      {username && (
        <Link href={formatProfilePageRoute(username)}>
          <a className={styles.userInfo}>
            <Avatar className={styles.avatar} />
            <div>
              <div className={styles.fullName}>{fullName}</div>
              <div className={styles.username}>@{username}</div>
            </div>
          </a>
        </Link>
      )}
      {user?.id !== id && (
        <div className="flex items-stretch">
          {showFollow && !connectionStatus && (
            <Button {...actionButtons["follow"]}>{t("buttons.follow")}</Button>
          )}
          {showFollow && connectionStatus == 2 && (
            <Button {...actionButtons["following"]}>
              {t("buttons.following")}
            </Button>
          )}
          {showFollow && connectionStatus == 1 && (
            <Button {...actionButtons["requested"]}>
              {t("buttons.requested")}
            </Button>
          )}
          {showAccept && (
            <Button {...actionButtons["accept"]}>{t("buttons.confirm")}</Button>
          )}
          {showDelete && (
            <Button {...actionButtons["reject"]}>
              <XIcon className={styles.rejectIcon} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
