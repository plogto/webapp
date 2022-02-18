import classNames from "classnames";
import Link from "next/link";
import styles from "./Post.module.css";
import { Content, Footer, Header } from "./components";
import { usePost } from "./hooks/usePost";
import { Card } from "@components/Card";
import { Replies } from "@components/Replies";
import { POST_TYPES } from "@config";
import { DateType, PostTypeKey } from "@enums";
import { useNavigation } from "@hooks/useNavigation";
import type { PostProps } from "./@types";

export function Post(props: PostProps) {
  const {
    type,
    type: {
      headerSize,
      contentSize,
      dateSize,
      footerSize,
      clickableContent,
      dateType = DateType.SHORT,
      key,
    },
    post,
    post: {
      user,
      url,
      replies,
      createdAt,
      updatedAt,
      isLiked,
      isSaved,
      content,
    },
    actions,
    repliesActions,
    className,
  } = props;

  const {
    isParentReply,
    isParent,
    isCard,
    repliesCounter,
    showQuickReplies,
    showCompleteReplies,
    showThreadReplies,
  } = usePost({
    type,
    post,
    actions,
    repliesActions,
  });

  const { formatPostPageRoute } = useNavigation();

  const contentComponent = (
    <span>
      <Content
        showHeader={!isCard}
        user={user}
        size={contentSize}
        content={content}
        dateSize={dateSize}
        dateType={dateType}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
    </span>
  );

  const wrapperClasses = classNames(
    styles.post,
    isParentReply && styles.isParentReply,
    !isCard && styles.isNotCard,
    className,
  );
  const headerClasses = classNames(isParent && styles.isParent);

  return (
    <Card shadow={isCard} className={wrapperClasses}>
      <div className="relative">
        {((isParentReply && repliesCounter.count > 0) ||
          key === PostTypeKey.CHILD) && <div className={styles.thread}></div>}
        <div className={classNames(styles.headerAndContentWrapper)}>
          <Header
            showUserInfo={isCard}
            className={headerClasses}
            size={headerSize}
            user={user}
          />
          {clickableContent ? (
            <Link href={formatPostPageRoute(url)}>
              <a>{contentComponent}</a>
            </Link>
          ) : (
            contentComponent
          )}
        </div>
        <Footer
          size={footerSize}
          isLiked={isLiked}
          isSaved={isSaved}
          {...actions}
        />
      </div>
      <div className="flex flex-col">
        {showQuickReplies && (
          <Link href={formatPostPageRoute(url)}>
            <a className={styles.repliesCounter}>View {repliesCounter.text}</a>
          </Link>
        )}
        {showCompleteReplies && (
          <Replies
            type={POST_TYPES.REPLY}
            replies={replies}
            actions={repliesActions}
          />
        )}
        <div>
          {showThreadReplies && (
            <Replies
              type={POST_TYPES.CHILD}
              replies={replies}
              actions={repliesActions}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
