import classNames from "classnames";
import { Avatar } from "@components/Avatar";
import { FullName } from "@components/FullName";
import styles from "./UserInfo.module.css";
import type { UserInfoProps } from "./UserInfo.types";

export function UserInfo(props: UserInfoProps) {
  const { user, showAvatar = true, size = "normal" } = props;
  const wrapperClasses = classNames(styles.userInfo, styles[size]);

  return user ? (
    <div className={wrapperClasses}>
      {showAvatar && (
        <Avatar
          size={size}
          className={styles.avatar}
          avatar={user.avatar}
          alt={user.fullName}
        />
      )}
      <div className={styles.content}>
        <FullName
          fullName={user.fullName}
          isVerified={user.isVerified}
          size={size}
        />
        <div className={styles.username}>@{user.username}</div>
      </div>
    </div>
  ) : (
    <></>
  );
}
