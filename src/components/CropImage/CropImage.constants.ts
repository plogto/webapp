import { CropImageTypeKey } from "@enums";
import type { CropImageAspects, CropImageTypes } from "./CropImage.types";

const CROP_IMAGES_ASPECTS: CropImageAspects = {
  "1:1": {
    key: "1:1",
    value: 1 / 1,
    icon: "Square",
  },
  "4:1": {
    key: "4:1",
    value: 4 / 1,
  },
  "4:5": {
    key: "4:5",
    value: 4 / 5,
    icon: "RectangleVertical",
  },
  "16:9": {
    key: "16:9",
    value: 16 / 9,
    icon: "RectangleHorizontal",
  },
};

export const CROP_IMAGES_TYPES: CropImageTypes = {
  [CropImageTypeKey.AVATAR]: {
    type: CropImageTypeKey.AVATAR,
    aspects: [CROP_IMAGES_ASPECTS["1:1"]],
  },
  [CropImageTypeKey.BACKGROUND]: {
    type: CropImageTypeKey.BACKGROUND,
    aspects: [CROP_IMAGES_ASPECTS["4:1"]],
  },
  [CropImageTypeKey.POST]: {
    type: CropImageTypeKey.POST,
    aspects: [
      CROP_IMAGES_ASPECTS["1:1"],
      CROP_IMAGES_ASPECTS["4:5"],
      CROP_IMAGES_ASPECTS["16:9"],
    ],
  },
};
