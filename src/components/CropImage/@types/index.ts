import { IconNames } from "@components/Icon";
import { CropImageTypeKey } from "@enums";
import type { Dispatch, SetStateAction } from "react";

type Aspect = "1:1" | "1:3" | "4:5" | "16:9";

export type PixelCrop = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type GetCroppedImageProps = {
  imageSrc?: string;
  pixelCrop?: PixelCrop;
  rotation?: number;
  flip?: { horizontal: boolean; vertical: boolean };
};

export type CropImageAspects = {
  [key in Aspect]: CropImageAspect;
};

type CropImageAspect = {
  key: Aspect;
  value: number;
  icon?: IconNames;
  active?: boolean;
};

export type CropImageTypes = {
  [key in CropImageTypeKey]: CropImageType;
};

export type CropImageType = {
  type: CropImageTypeKey;
  aspects: CropImageAspect[];
};

export type CropImageProps = {
  type: CropImageTypeKey;
  // TODO: fix this type
  inputFileRef: any;
  setImagePreview: Dispatch<SetStateAction<Blob | undefined>>;
};

export type HeaderProps = {
  onCancel: () => void;
  onApply: () => void;
};

export type AspectMenuProps = {
  aspects: CropImageAspect[];
  activeAspect: CropImageAspect;
  setActiveAspect: Dispatch<SetStateAction<CropImageAspect>>;
};

export type UseCropImageProps = {
  type: CropImageTypeKey;
  setImagePreview: Dispatch<SetStateAction<Blob | undefined>>;
};
