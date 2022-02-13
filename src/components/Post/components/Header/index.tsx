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
    replyTo,
  } = props;

  const { formatProfilePageRoute } = useNavigation();
  const sizeClasses = styles[size];

  return (
    <div className={styles.header}>
      <a className={classNames(styles.profile)}>
        <Link href={formatProfilePageRoute(username)}>
          <a>
            <Avatar size={size} className={styles.avatar} />
          </a>
        </Link>
        <div className="flex flex-col justify-center">
          <Link href={formatProfilePageRoute(username)}>
            <a
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
            </a>
          </Link>
          {replyTo && (
            <Link href={formatProfilePageRoute(replyTo.username)}>
              <a className={styles.replyTo}>
                Replying to{" "}
                <span
                  className={styles.username}
                >{`@${replyTo.username}`}</span>
              </a>
            </Link>
          )}
        </div>
      </a>

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
