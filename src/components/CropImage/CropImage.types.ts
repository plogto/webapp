import type { Dispatch, Ref, SetStateAction } from "react";
import { CropImageTypeKey } from "@enums";
import { IconNames } from "@components/Icon";

type Aspect = "1:1" | "4:1" | "4:5" | "16:9";

export interface PixelCrop {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GetCroppedImageProps {
  imageSrc?: string;
  pixelCrop?: PixelCrop;
  rotation?: number;
  flip?: { horizontal: boolean; vertical: boolean };
}

export type CropImageAspects = {
  [key in Aspect]: CropImageAspect;
};

interface CropImageAspect {
  key: Aspect;
  value: number;
  icon?: IconNames;
  active?: boolean;
}

export type CropImageTypes = {
  [key in CropImageTypeKey]: CropImageType;
};

export interface CropImageType {
  type: CropImageTypeKey;
  aspects: CropImageAspect[];
}

export interface CropImageProps {
  type: CropImageTypeKey;
  // TODO: fix this type
  inputFileRef: Ref<HTMLInputElement>;
  setImagePreview: Dispatch<SetStateAction<Blob | undefined>>;
}

export interface CropImageHeaderProps {
  onCancel: () => void;
  onApply: () => void;
}

export interface AspectMenuProps {
  aspects: CropImageAspect[];
  activeAspect: CropImageAspect;
  setActiveAspect: Dispatch<SetStateAction<CropImageAspect>>;
}

export interface UseCropImageProps {
  type: CropImageTypeKey;
  setImagePreview: Dispatch<SetStateAction<Blob | undefined>>;
}
