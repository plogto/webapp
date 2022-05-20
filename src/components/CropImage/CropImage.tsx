import Cropper from "react-easy-crop";
import classNames from "classnames";
import { CropImageTypeKey } from "@enums";
import styles from "./CropImage.module.css";
import type { CropImageProps } from "./CropImage.types";
import { AspectMenu, CropImageHeader } from "./components";
import { useCropImage } from "./hooks";

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
          <CropImageHeader onCancel={closeModal} onApply={createCroppedImage} />
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
