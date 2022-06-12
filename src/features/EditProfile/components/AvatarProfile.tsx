import { useTranslation } from "react-i18next";
import { CropImageTypeKey } from "@enums";
import { Avatar } from "@components/Avatar";
import { ChangeImageProfileModal } from "@components/ChangeImageProfileModal";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import type { AvatarProfileProps } from "@features/Settings/Settings.types";
import { useImageProfile } from "@hooks/useImageProfile";
import styles from "../EditProfile.module.css";

export function AvatarProfile(props: AvatarProfileProps) {
  const { avatar } = props;
  const {
    inputFileRef,
    onClickInputFile,
    setImagePreview,
    closeModal,
    openModal,
    isOpen,
    removeImage,
  } = useImageProfile({ key: "avatar" });
  const { t } = useTranslation("settings");

  return (
    <>
      <ChangeImageProfileModal
        title={t("texts.changeBackgroundPhoto")}
        isOpen={isOpen}
        removeImage={removeImage}
        closeModal={closeModal}
        onClickInputFile={onClickInputFile}
        showRemoveButton={!!avatar}
      />
      <div className={styles.avatarWrapper}>
        <button
          className={styles.uploadAvatar}
          type="button"
          onClick={openModal}
        >
          <Icon name="Camera" className={styles.icon} />
        </button>
        <Avatar avatar={avatar} size="large" className={styles.avatar} />
        <CropImage
          type={CropImageTypeKey.AVATAR}
          setImagePreview={setImagePreview}
          inputFileRef={inputFileRef}
        />
      </div>
    </>
  );
}
