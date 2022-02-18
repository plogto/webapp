import classNames from "classnames";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "../../Post.module.css";
import { DateTime } from "../DateTime";
import { Hashtag } from "@components/Hashtag";
import { useNavigation } from "@hooks/useNavigation";
import { usePostParser } from "@hooks/usePostParser";
import type { ContentPostProps } from "@components/Post/@types";

export function Content(props: ContentPostProps) {
  const {
    size = "normal",
    showHeader = false,
    content = "",
    className,
    user,
    dateSize,
    dateType,
    createdAt,
    updatedAt,
  } = props;
  const { formatProfilePageRoute } = useNavigation();
  const { parsePost } = usePostParser();
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(
    styles.content,
    showHeader && styles.showHeader,
    sizeClasses,
    className,
  );

  return (
    <p className={wrapperClasses}>
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
      <span>
        {parsePost({
          content,
          hashtagComponent: (value: string) => (
            <Hashtag key={uuid()} value={value} />
          ),
        })}
        <DateTime
          type={dateType}
          createdAt={createdAt}
          updatedAt={updatedAt}
          size={dateSize}
        />
      </span>
    </p>
  );
}
