import { CropImageTypeKey } from "@enums";
import type { CropImageAspects, CropImageTypes } from "../@types";

const CROP_IMAGES_ASPECTS: CropImageAspects = {
  "1:1": {
    key: "1:1",
    value: 1 / 1,
    icon: "square",
  },
  "1:3": {
    key: "1:3",
    value: 1 / 3,
  },
  "4:5": {
    key: "4:5",
    value: 4 / 5,
    icon: "rectangleVertical",
  },
  "16:9": {
    key: "16:9",
    value: 16 / 9,
    icon: "rectangleHorizontal",
  },
};

export const CROP_IMAGES_TYPES: CropImageTypes = {
  AVATAR: {
    type: CropImageTypeKey.AVATAR,
    aspects: [CROP_IMAGES_ASPECTS["1:1"]],
  },
  COVER: {
    type: CropImageTypeKey.COVER,
    aspects: [CROP_IMAGES_ASPECTS["1:3"]],
  },
  POST: {
    type: CropImageTypeKey.POST,
    aspects: [
      CROP_IMAGES_ASPECTS["1:1"],
      CROP_IMAGES_ASPECTS["4:5"],
      CROP_IMAGES_ASPECTS["16:9"],
    ],
  },
};
