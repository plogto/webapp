import { ChangeEvent, useCallback, useState } from "react";
import { CROP_IMAGES_TYPES } from "../constants";
import { readFile } from "../utils";
import { useCanvas } from ".";
import type { UseCropImageProps, PixelCrop } from "../@types";

export function useCropImage(props: UseCropImageProps) {
  const { type, setImagePreview } = props;
  const { aspects } = CROP_IMAGES_TYPES[type];
  const [activeAspect, setActiveAspect] = useState(aspects[0]);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const { getCroppedImage } = useCanvas();
  const [imageSrc, setImageSrc] = useState<string>();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [pixelCrop, setPixelCrop] = useState<PixelCrop>();

  const onCropComplete = useCallback((_, pixelCrop) => {
    setPixelCrop(pixelCrop);
  }, []);

  const createCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImage({
        imageSrc,
        pixelCrop,
      });
      croppedImage?.toBlob(async blob => {
        setImagePreview(blob || undefined);
      }, "image/png");
      closeModal();
    } catch (e) {
      // TODO: add toast error
    }
  }, [closeModal, getCroppedImage, imageSrc, pixelCrop, setImagePreview]);

  const onFileChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0];
        const imageDataUrl = (await readFile(file)) as unknown as string;

        if (imageDataUrl) {
          setImageSrc(imageDataUrl);
          openModal();
        }
      }
    },
    [openModal],
  );

  return {
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
  };
}
