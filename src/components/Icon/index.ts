import classNames from "classnames";
import { createElement, SVGAttributes } from "react";

import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import CommentCircleFill from "./svg/comment-circle-fill.svg";
import CommentCircle from "./svg/comment-circle.svg";
import ExclamationFill from "./svg/exclamation-fill.svg";
import Exclamation from "./svg/exclamation.svg";
import HeartFill from "./svg/heart-fill.svg";
import Heart from "./svg/heart.svg";

export const iconsList = {
  heart: {
    outline: Heart,
    fill: HeartFill,
  },
  bookmark: {
    outline: Bookmark,
    fill: BookmarkFill,
  },
  comment: {
    outline: CommentCircle,
    fill: CommentCircleFill,
  },
  exclamation: {
    outline: Exclamation,
    fill: ExclamationFill,
  },
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
  type?: "outline" | "fill";
}

export function Icon({ name, className, type, ...props }: IconProps) {
  const classes = classNames({
    icon: true,
  });

  const icon = iconsList[name][type || "outline"];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className: `${classes} ${className}`,
    role: "icon",
    ...props,
  });
}
