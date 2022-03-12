import { useTranslation } from "react-i18next";
import styles from "../../Settings.module.css";
import { useImageProfile } from "../../hooks/useImageProfile";
import { ChangeImageProfileModal } from "../ChangeImageProfileModal";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { CropImageTypeKey } from "@enums";
import { useUrls } from "@hooks/useUrls";
import type { BackgroundProfileProps } from "@features/Settings/@types";

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
      />
      <div
        className={styles.backgroundWrapper}
        style={{
          backgroundImage: background ? `url(${getFileUrl(background)})` : "",
        }}
      >
        <button
          className={styles.uploadBackground}
          type="button"
          onClick={openModal}
        >
          <Icon name="camera" className={styles.icon} />
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
