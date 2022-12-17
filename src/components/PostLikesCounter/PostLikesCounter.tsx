import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { UsersListDataKey } from "@enums";
import { UsersList } from "@components/Lists/UsersList";
import { ListModal } from "@components/Modal/components";
import { useModalContext } from "@contexts/ModalContext";
import { formatCountTitle } from "@utils/formatter";
import styles from "./PostLikesCounter.module.css";
import type { PostLikesCounterProps } from "./PostLikesCounter.types";
import { usePostLikesCounter } from "./usePostLikesCounter";

export function PostLikesCounter(props: PostLikesCounterProps) {
  const { size = "normal", likes, postId } = props;
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(styles.likes, sizeClasses);
  const { isOpen, openModal } = useModalContext();
  const { t } = useTranslation("post");

  const { likedPosts, getMoreData, isLoading, emptyStatus } =
    usePostLikesCounter({
      postId,
    });

  const { title, count } = formatCountTitle({
    singular: "Like",
    plural: "Likes",
    count: likes?.totalCount,
  });

  const handleOpenModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openModal();
  };

  if (count) {
    return (
      <>
        <span className={wrapperClasses}>
          <span className={styles.separate}>&middot;</span>
          <button onClick={handleOpenModal}>
            <strong>{count}</strong> {title}
          </button>
        </span>
        <ListModal
          isOpen={isOpen}
          title={t("modals.likes.title")}
          closeButton={t("buttons.okay")}
        >
          <div className={styles.listWrapper}>
            <UsersList
              data={likedPosts}
              emptyStatus={emptyStatus}
              dataKey={UsersListDataKey.USER}
              isLoading={isLoading}
              getMoreData={getMoreData}
              itemClassName={styles.user}
            />
          </div>
        </ListModal>
      </>
    );
  }

  return null;
}
