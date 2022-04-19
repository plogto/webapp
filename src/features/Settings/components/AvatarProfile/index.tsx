import { useTranslation } from "react-i18next";
import styles from "../../Settings.module.css";
import { ChangeImageProfileModal } from "../ChangeImageProfileModal";
import { Avatar } from "@components/Avatar";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { CropImageTypeKey } from "@enums";
import { useImageProfile } from "@features/Settings/hooks/useImageProfile";
import type { AvatarProfileProps } from "@features/Settings/@types";

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
          <Icon name="camera" className={styles.icon} />
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
