import classNames from "classnames";
import { createElement, SVGAttributes } from "react";

import BellFill from "./svg/bell-fill.svg";
import Bell from "./svg/bell.svg";
import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import ChevronLeftFill from "./svg/chevron-left-fill.svg";
import ChevronLeft from "./svg/chevron-left.svg";
import CommentCircleFill from "./svg/comment-circle-fill.svg";
import CommentCircle from "./svg/comment-circle.svg";
import DotsHorizontalFill from "./svg/dots-horizontal-fill.svg";
import DotsHorizontal from "./svg/dots-horizontal.svg";
import ExclamationFill from "./svg/exclamation-fill.svg";
import Exclamation from "./svg/exclamation.svg";
import HeartFill from "./svg/heart-fill.svg";
import Heart from "./svg/heart.svg";
import KeyFill from "./svg/key-fill.svg";
import Key from "./svg/key.svg";
import Plog from "./svg/plog.svg";
import RectangleHorizontalFill from "./svg/rectangle-horizontal-fill.svg";
import RectangleHorizontal from "./svg/rectangle-horizontal.svg";
import RectangleVerticalFill from "./svg/rectangle-vertical-fill.svg";
import RectangleVertical from "./svg/rectangle-vertical.svg";
import SquareFill from "./svg/square-fill.svg";
import Square from "./svg/square.svg";
import UserFill from "./svg/user-fill.svg";
import User from "./svg/user.svg";
import Users from "./svg/users.svg";

export const iconsList = {
  bell: {
    outline: Bell,
    fill: BellFill,
  },
  bookmark: {
    outline: Bookmark,
    fill: BookmarkFill,
  },
  chevronLeft: {
    outline: ChevronLeft,
    fill: ChevronLeftFill,
  },
  comment: {
    outline: CommentCircle,
    fill: CommentCircleFill,
  },
  dotsHorizontal: {
    outline: DotsHorizontal,
    fill: DotsHorizontalFill,
  },
  exclamation: {
    outline: Exclamation,
    fill: ExclamationFill,
  },
  heart: {
    outline: Heart,
    fill: HeartFill,
  },
  key: {
    outline: Key,
    fill: KeyFill,
  },
  plog: {
    outline: Plog,
    // TODO: add PlogFill icon
    fill: Plog,
  },
  rectangleHorizontal: {
    outline: RectangleHorizontal,
    fill: RectangleHorizontalFill,
  },
  rectangleVertical: {
    outline: RectangleVertical,
    fill: RectangleVerticalFill,
  },
  square: {
    outline: Square,
    fill: SquareFill,
  },
  user: {
    outline: User,
    fill: UserFill,
  },
  users: {
    outline: Users,
    // TODO: add fill UsersFill icon
    fill: Users,
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
