import classNames from "classnames";
import Link from "next/link";
import styles from "../../Post.module.css";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useNavigation } from "@hooks/useNavigation";
import type { HeaderPostProps } from "@components/Post/@types";

export function Header(props: HeaderPostProps) {
  const {
    showUserInfo = true,
    className,
    showMoreButton,
    onMoreButton,
    size = "normal",
    user: { username, fullName, avatar },
  } = props;

  const { formatProfilePageRoute } = useNavigation();
  const wrapperClasses = classNames(
    styles.header,
    !showUserInfo && styles.inlineHeader,
    className,
  );

  return (
    <div className={wrapperClasses}>
      <div className={classNames(styles.profile)}>
        <Link href={formatProfilePageRoute(username)}>
          <a>
            <Avatar size={size} className={styles.avatar} avatar={avatar} />
          </a>
        </Link>
        {showUserInfo && (
          <div className="flex flex-col justify-center">
            <Link href={formatProfilePageRoute(username)}>
              <a className={classNames(styles.userInfo)}>
                <div className={classNames(styles.fullName)}>{fullName}</div>
                <div className={classNames(styles.username)}>@{username}</div>
              </a>
            </Link>
          </div>
        )}
      </div>

      {showMoreButton && (
        <button onClick={onMoreButton} className={styles.more}>
          <Icon name="dotsHorizontal" className={classNames(styles.icon)} />
        </button>
      )}
    </div>
  );
}
