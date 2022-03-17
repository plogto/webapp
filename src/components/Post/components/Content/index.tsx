import classNames from "classnames";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "../../Post.module.css";
import { DateTime } from "../DateTime";
import { Hashtag } from "@components/Hashtag";
import { useNavigation } from "@hooks/useNavigation";
import { usePostParser } from "@hooks/usePostParser";
import { useUrls } from "@hooks/useUrls";
import type { ContentPostProps } from "@components/Post/@types";

export function Content(props: ContentPostProps) {
  const {
    size = "normal",
    url,
    isClickable,
    showHeader = false,
    content = "",
    attachment = [],
    className,
    user,
    dateSize,
    dateType,
    createdAt,
    updatedAt,
  } = props;
  const { formatProfilePageRoute, formatPostPageRoute } = useNavigation();
  const { getFileUrl } = useUrls();
  const { parsePost } = usePostParser();
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(
    styles.content,
    showHeader && styles.showHeader,
    sizeClasses,
    className,
  );

  const textComponent = (
    <>
      {content?.length > 0 && (
        <p>
          {parsePost({
            content,
            hashtagComponent: (value: string) => (
              <Hashtag key={uuid()} value={value} isClickable={!isClickable} />
            ),
          })}
        </p>
      )}
      {attachment?.length > 0 && (
        <img className={styles.attachment} src={getFileUrl(attachment[0])} />
      )}
      <DateTime
        type={dateType}
        createdAt={createdAt}
        updatedAt={updatedAt}
        size={dateSize}
      />
    </>
  );

  return (
    <span className={wrapperClasses}>
      {showHeader && user && (
        <a className={classNames(styles.profile)}>
          <div className="flex flex-col justify-center">
            <Link href={formatProfilePageRoute(user.username)}>
              <a className={classNames(styles.fullName, sizeClasses)}>
                {user.fullName}
              </a>
            </Link>
          </div>
        </a>
      )}
      <span className="w-full">
        {isClickable && url ? (
          <Link href={formatPostPageRoute(url)}>
            <a>{textComponent}</a>
          </Link>
        ) : (
          textComponent
        )}
      </span>
    </span>
  );
}
