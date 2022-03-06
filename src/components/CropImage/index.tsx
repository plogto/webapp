import classNames from "classnames";
import Cropper from "react-easy-crop";
import styles from "./CropImage.module.css";
import { AspectMenu } from "./components/AspectMenu";
import { Header } from "./components/Header";
import { useCropImage } from "./hooks";
import { CropImageTypeKey } from "@enums";
import type { CropImageProps } from "./@types";

export function CropImage(props: CropImageProps) {
  const {
    type = CropImageTypeKey.AVATAR,
    inputFileRef,
    setImagePreview,
  } = props;

  const {
    crop,
    setCrop,
    zoom,
    setZoom,
    imageSrc,
    activeAspect,
    setActiveAspect,
    aspects,
    isOpen,
    closeModal,
    onFileChange,
    onCropComplete,
    createCroppedImage,
  } = useCropImage({
    type,
    setImagePreview,
  });

  const wrapperClasses = classNames(styles.wrapper, isOpen && styles.isOpen);

  return (
    <div className={wrapperClasses}>
      {imageSrc && (
        <div className={styles.modal}>
          <Header onCancel={closeModal} onApply={createCroppedImage} />
          <div className={styles.cropImage}>
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={activeAspect.value}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
          <div className={styles.footer}>
            {aspects.length > 1 && (
              <AspectMenu
                aspects={aspects}
                activeAspect={activeAspect}
                setActiveAspect={setActiveAspect}
              />
            )}
          </div>
        </div>
      )}
      <input
        hidden
        type="file"
        ref={inputFileRef}
        onInput={onFileChange}
        accept="image/*"
      />
    </div>
  );
}
