import { useTranslation } from "react-i18next";
import { CropImageTypeKey } from "@enums";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import type { BackgroundProfileProps } from "@features/Settings/@types";
import { useUrls } from "@hooks/useUrls";
import styles from "../../Settings.module.css";
import { useImageProfile } from "../../hooks/useImageProfile";
import { ChangeImageProfileModal } from "../ChangeImageProfileModal";

export function BackgroundProfile(props: BackgroundProfileProps) {
  const { background } = props;
  const { getFileUrl } = useUrls();
  const {
    inputFileRef,
    onClickInputFile,
    setImagePreview,
    closeModal,
    openModal,
    isOpen,
    removeImage,
  } = useImageProfile({ key: "background" });
  const { t } = useTranslation("settings");

  return (
    <>
      <ChangeImageProfileModal
        title={t("texts.changeBackgroundPhoto")}
        isOpen={isOpen}
        removeImage={removeImage}
        closeModal={closeModal}
        onClickInputFile={onClickInputFile}
        showRemoveButton={!!background}
      />
      <div
        className={styles.backgroundWrapper}
        style={{
          backgroundImage: background
            ? `url(${getFileUrl(background.name)})`
            : "",
        }}
      >
        <button
          className={styles.uploadBackground}
          type="button"
          onClick={openModal}
        >
          <Icon name="Camera" className={styles.icon} />
        </button>
        <CropImage
          type={CropImageTypeKey.BACKGROUND}
          setImagePreview={setImagePreview}
          inputFileRef={inputFileRef}
        />
      </div>
    </>
  );
}
