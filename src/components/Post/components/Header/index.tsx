import classNames from "classnames";
import Link from "next/link";
import styles from "../../Post.module.css";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useNavigation } from "@hooks/useNavigation";
import type { HeaderPostProps } from "@components/Post/@types";

export function Header(props: HeaderPostProps) {
  const {
    isCompact,
    showMoreButton,
    onMoreButton,
    size = "normal",
    user: { username, fullName },
  } = props;

  const { formatProfilePageRoute } = useNavigation();
  const sizeClasses = size === "small" && styles.small;

  return (
    <div className={styles.header}>
      <Link href={formatProfilePageRoute(username)}>
        <a className={classNames(styles.profile)}>
          <Avatar size={size} className={styles.avatar} />
          <div
            className={classNames(
              styles.userInfo,
              isCompact && styles.isCompact,
            )}
          >
            <div className={classNames(styles.fullName, sizeClasses)}>
              {fullName}
            </div>
            <div className={classNames(styles.username, sizeClasses)}>
              @{username}
            </div>
          </div>
        </a>
      </Link>
      {showMoreButton && (
        <button onClick={onMoreButton} className={styles.more}>
          <Icon
            name="dotsHorizontal"
            className={classNames(styles.icon, sizeClasses)}
          />
        </button>
      )}
    </div>
  );
}
