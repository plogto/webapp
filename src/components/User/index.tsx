import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./User.module.css";
import { useActions } from "./hooks/useActions";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { useAccountContext } from "@contexts/AccountContext";
import { useNavigation } from "@hooks/useNavigation";
import type { ActionButtons, UserProps } from "./@types";

// TODO: refactor this component
export function User(props: UserProps) {
  const {
    user: { id, username, fullName, connectionStatus },
    showAccept,
    showDelete,
    showFollow,
  } = props;
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
              <Icon name="x" className={styles.rejectIcon} />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
