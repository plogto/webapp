import classNames from "classnames";
import { createElement, SVGAttributes } from "react";

import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import HeartFill from "./svg/heart-fill.svg";
import Heart from "./svg/heart.svg";

const iconsList = {
  heart: {
    outline: Heart,
    fill: HeartFill,
  },
  bookmark: {
    outline: Bookmark,
    fill: BookmarkFill,
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
