import { AnimationPattern } from "@enums";

export function prepareAnimationClasses(pattern: AnimationPattern) {
  switch (pattern) {
    case AnimationPattern.ZOOM_IN:
      return "animate-[zoomIn_.2s]";
    case AnimationPattern.BUZZ:
      return "animate-[buzz_.2s]";
  }
}
