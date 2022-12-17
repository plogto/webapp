import anchorme from "anchorme";
import classNames from "classnames";
import { isEmpty } from "lodash";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { FullName } from "@components/FullName";
import { Hashtag } from "@components/Hashtag";
import { Img } from "@components/Img";
import { Mention } from "@components/Mention";
import { PostDateTime } from "@components/PostDateTime";
import { PostLikesCounter } from "@components/PostLikesCounter";
import { ModalProvider } from "@contexts/ModalContext";
import { useNavigator } from "@hooks/useNavigator";
import { usePostParser } from "@hooks/usePostParser";
import styles from "./PostContent.module.css";
import type { PostContentProps } from "./PostContent.types";

export function PostContent(props: PostContentProps) {
  const {
    id,
    size = "normal",
    url,
    isClickable,
    showHeader = false,
    content = "",
    attachment = [],
    likes,
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
            mentionComponent: (value: string) => (
              <Mention key={uuid()} value={value} />
            ),
            linkComponent: (link: string) => {
              const protocol =
                !isEmpty(anchorme.list(link)) && anchorme.list(link)[0].protocol
                  ? ""
                  : "https://";

              return (
                <Link key={uuid()} href={`${protocol}${link}`}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link}
                  </a>
                </Link>
              );
            },
          })}
        </p>
      )}
      {attachment?.length > 0 && (
        <div className={styles.attachment}>
          <Img alt={content} image={attachment[0]} />
        </div>
      )}
      {dateSize && (
        <div className="flex flex-row">
          <PostDateTime
            type={dateType}
            createdAt={createdAt}
            updatedAt={updatedAt}
            size={dateSize}
          />
          <ModalProvider>
            <PostLikesCounter size={dateSize} likes={likes} postId={id} />
          </ModalProvider>
        </div>
      )}
    </span>
  );

  return (
    <span className={wrapperClasses}>
      {showHeader && user && (
        <div className={classNames(styles.profile)}>
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
        </div>
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
