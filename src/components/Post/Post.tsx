import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import { POST_TYPES } from "@constants";
import { DateType } from "@enums";
import { PostContent } from "@components/PostContent";
import { Replies } from "@components/Replies";
import { ModalProvider } from "@contexts/ModalContext";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./Post.module.css";
import type { PostProps } from "./Post.types";
import { Footer, Header } from "./components";
import { usePost } from "./hooks/usePost";

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
      likes,
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

  const { formatPostPageRoute } = useNavigator();

  const wrapperClasses = classNames(
    styles.post,
    isParentReply && styles.isParentReply,
    !isCard && styles.isNotCard,
    className,
  );
  const headerClasses = classNames(isParent && styles.isParent);
  const { t } = useTranslation("post");

  return (
    <div className={wrapperClasses}>
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
            id={id}
            showHeader={!isCard}
            url={url}
            isClickable={isContentClickable}
            user={user}
            size={contentSize}
            content={content}
            attachment={attachment}
            likes={likes}
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
    </div>
  );
}
