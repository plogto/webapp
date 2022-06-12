import { useTranslation } from "react-i18next";
import { CropImageTypeKey } from "@enums";
import { ChangeImageProfileModal } from "@components/ChangeImageProfileModal";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { Img } from "@components/Img";
import type { BackgroundProfileProps } from "@features/Settings/Settings.types";
import { useImageProfile } from "@hooks/useImageProfile";
import { useUrls } from "@hooks/useUrls";
import styles from "./BackgroundProfile.module.css";

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
        {background && <Img image={background} alt="background" />}
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
