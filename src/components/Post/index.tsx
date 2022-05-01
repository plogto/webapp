import classNames from "classnames";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Post.module.css";
import { Footer, Header } from "./components";
import { usePost } from "./hooks/usePost";
import { Card } from "@components/Card";
import { PostContent } from "@components/PostContent";
import { Replies } from "@components/Replies";
import { POST_TYPES } from "@constants";
import { ModalProvider } from "@contexts/ModalContext";
import { DateType } from "@enums";
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
      isContentClickable,
      showMoreButton = true,
      dateType = DateType.SHORT,
    },
    post,
    post: {
      id,
      user,
      url,
      replies,
      createdAt,
      updatedAt,
      isLiked,
      isSaved,
      content,
      attachment = [],
    },
    className,
  } = props;

  const {
    isPage,
    isParentReply,
    isParent,
    isCard,
    repliesCounter,
    showQuickReplies,
    showCompleteReplies,
    showThreadReplies,
    showParent,
    setShowParent,
    filterMenuItems,
  } = usePost({
    type,
    post,
  });

  const { formatPostPageRoute } = useNavigation();

  const wrapperClasses = classNames(
    styles.post,
    isParentReply && styles.isParentReply,
    !isCard && styles.isNotCard,
    className,
  );
  const headerClasses = classNames(isParent && styles.isParent);
  const { t } = useTranslation("post");

  return (
    <Card shadow={isCard} className={wrapperClasses}>
      {post.parent &&
        isPage &&
        (showParent ? (
          <Post post={post.parent} type={POST_TYPES.REPLY} />
        ) : (
          <button
            className={styles.showParentButton}
            onClick={() => setShowParent(true)}
          >
            <span>{t("buttons.viewParentPost")}</span>
          </button>
        ))}
      <div className="relative">
        <div className={classNames(styles.headerAndContentWrapper)}>
          <ModalProvider>
            <Header
              postId={id}
              url={url}
              showUserInfo={isCard}
              className={headerClasses}
              size={headerSize}
              user={user}
              filterMenuItems={filterMenuItems}
              showMoreButton={showMoreButton}
            />
          </ModalProvider>
          <PostContent
            showHeader={!isCard}
            url={url}
            isClickable={isContentClickable}
            user={user}
            size={contentSize}
            content={content}
            attachment={attachment}
            dateSize={dateSize}
            dateType={dateType}
            createdAt={createdAt}
            updatedAt={updatedAt}
          />
        </div>
        {footerSize && (
          <Footer
            postId={id}
            url={url}
            size={footerSize}
            isLiked={isLiked}
            isSaved={isSaved}
          />
        )}
      </div>
      <div className="flex flex-col">
        {showQuickReplies && (
          <Link href={formatPostPageRoute(url)}>
            <a className={styles.repliesCounter}>View {repliesCounter.text}</a>
          </Link>
        )}
        {showCompleteReplies && (
          <Replies type={POST_TYPES.REPLY} replies={replies} />
        )}
        {showThreadReplies && (
          <div>
            <Replies type={POST_TYPES.CHILD} replies={replies} />
          </div>
        )}
      </div>
    </Card>
  );
}
