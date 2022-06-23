import classNames from "classnames";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { FullName } from "@components/FullName";
import { Hashtag } from "@components/Hashtag";
import { Img } from "@components/Img";
import { PostDateTime } from "@components/PostDateTime";
import { useNavigator } from "@hooks/useNavigator";
import { usePostParser } from "@hooks/usePostParser";
import styles from "./PostContent.module.css";
import type { PostContentProps } from "./PostContent.types";

export function PostContent(props: PostContentProps) {
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
  const { formatProfilePageRoute, formatPostPageRoute } = useNavigator();
  const { parsePost } = usePostParser();
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(
    styles.content,
    showHeader && styles.showHeader,
    sizeClasses,
    className,
  );

  const textComponent = (
    <span className="flex flex-col space-y-1.5">
      {content?.length > 0 && (
        <p>
          {parsePost({
            content,
            hashtagComponent: (value: string) => (
              <Hashtag key={uuid()} value={value} />
            ),
          })}
        </p>
      )}
      {attachment?.length > 0 && (
        <div className={styles.attachment}>
          <Img alt={content} image={attachment[0]} />
        </div>
      )}
      {dateSize && (
        <PostDateTime
          type={dateType}
          createdAt={createdAt}
          updatedAt={updatedAt}
          size={dateSize}
        />
      )}
    </span>
  );

  return (
    <span className={wrapperClasses}>
      {showHeader && user && (
        <a className={classNames(styles.profile)}>
          <div className="flex flex-col justify-center">
            <Link href={formatProfilePageRoute(user.username)}>
              <a>
                <FullName
                  fullName={user.fullName}
                  isVerified={user.isVerified}
                  size="small"
                />
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
