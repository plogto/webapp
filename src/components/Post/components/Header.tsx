import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import { Avatar } from "@components/Avatar";
import { FullName } from "@components/FullName";
import { Icon } from "@components/Icon";
import { Menu } from "@components/Menu";
import type { MenuProps } from "@components/Menu/Menu.types";
import { DeleteModal } from "@components/Modal";
import type { HeaderPostProps } from "@components/Post/Post.types";
import { useDeletePost } from "@components/Post/hooks/useDeletePost";
import { useModalContext } from "@contexts/ModalContext";
import { useNavigator } from "@hooks/useNavigator";
import { useUrls } from "@hooks/useUrls";
import { copyTextToClipboard } from "@utils/copyTextToClipboard";
import { fillToast } from "@utils/toast";
import styles from "../Post.module.css";

export function Header(props: HeaderPostProps) {
  const {
    postId,
    url,
    showUserInfo = true,
    className,
    size = "normal",
    user: { username, fullName, avatar, isVerified },
    filterMenuItems,
    showMoreButton,
  } = props;

  const { openModal, isOpen } = useModalContext();
  const { formatPostUrl } = useUrls();
  const { t } = useTranslation("post");
  const { deletePost } = useDeletePost({ postId });

  const MENU_ITEMS: MenuProps["items"] = [
    {
      key: "copy",
      title: t("texts.copyLink"),
      icon: "Link",
      onClick: () =>
        copyTextToClipboard(formatPostUrl(url)).then(() => {
          fillToast(t("texts.copiedToClipboard"));
        }),
    },
    {
      key: "delete",
      title: t("texts.deletePost"),
      icon: "Trash",
      type: "delete",
      onClick: openModal,
    },
  ];

  const { formatProfilePageRoute } = useNavigator();
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
            <Avatar
              size={size}
              className={styles.avatar}
              avatar={avatar}
              alt={fullName}
            />
          </a>
        </Link>
        {showUserInfo && (
          <div className="flex flex-col justify-center w-5/6 md:w-8/12">
            <Link href={formatProfilePageRoute(username)}>
              <a className={classNames(styles.userInfo)}>
                <FullName fullName={fullName} isVerified={isVerified} />
                <div className={classNames(styles.username)}>@{username}</div>
              </a>
            </Link>
          </div>
        )}
      </div>

      {showMoreButton && (
        <>
          <DeleteModal
            isOpen={isOpen}
            title={t("modals.delete.title")}
            description={t("modals.delete.description")}
            onDelete={deletePost}
          />

          <Menu
            items={filterMenuItems(MENU_ITEMS)}
            className="absolute right-0"
            itemsClassName="absolute right-2 w-60"
            buttonIcon={
              <span className={styles.more}>
                <Icon
                  name="DotsHorizontal"
                  className={classNames(styles.icon)}
                />
              </span>
            }
          />
        </>
      )}
    </div>
  );
}
