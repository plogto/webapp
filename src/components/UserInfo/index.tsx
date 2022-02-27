import classNames from "classnames";
import styles from "./UserInfo.module.css";
import { Avatar } from "@components/Avatar";
import type { UserInfoProps } from "./@types";

export function UserInfo(props: UserInfoProps) {
  const { user, showAvatar = true, size = "normal" } = props;
  const wrapperClasses = classNames(styles.userInfo, styles[size]);

  return user ? (
    <div className={wrapperClasses}>
      {showAvatar && <Avatar className={styles.avatar} />}
      <div>
        <div className={styles.fullName}>{user?.fullName}</div>
        <div className={styles.username}>@{user?.username}</div>
      </div>
    </div>
  ) : (
    <></>
  );
}
