import { createElement, SVGAttributes } from "react";
import classNames from "classnames";
import ArrowLeft from "./svg/arrow-left.svg";
import BellFill from "./svg/bell-fill.svg";
import Bell from "./svg/bell.svg";
import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import CameraFill from "./svg/camera-fill.svg";
import Camera from "./svg/camera.svg";
import ColorPalette from "./svg/color-palette.svg";
import CommentSquareFill from "./svg/comment-square-fill.svg";
import CommentSquare from "./svg/comment-square.svg";
import DotsHorizontalFill from "./svg/dots-horizontal-fill.svg";
import DotsHorizontal from "./svg/dots-horizontal.svg";
import ExclamationFill from "./svg/exclamation-fill.svg";
import Exclamation from "./svg/exclamation.svg";
import GlobeFill from "./svg/globe-fill.svg";
import Globe from "./svg/globe.svg";
import Hashtag from "./svg/hashtag.svg";
import HeartFill from "./svg/heart-fill.svg";
import Heart from "./svg/heart.svg";
import KeyFill from "./svg/key-fill.svg";
import Key from "./svg/key.svg";
import Link from "./svg/link.svg";
import LockClosedFill from "./svg/lock-closed-fill.svg";
import LockClosed from "./svg/lock-closed.svg";
import MailFill from "./svg/mail-fill.svg";
import Mail from "./svg/mail.svg";
import Photo from "./svg/photo.svg";
import Plog from "./svg/plog.svg";
import PlusFill from "./svg/plus-fill.svg";
import Plus from "./svg/plus.svg";
import RectangleHorizontalFill from "./svg/rectangle-horizontal-fill.svg";
import RectangleHorizontal from "./svg/rectangle-horizontal.svg";
import RectangleVerticalFill from "./svg/rectangle-vertical-fill.svg";
import RectangleVertical from "./svg/rectangle-vertical.svg";
import SquareFill from "./svg/square-fill.svg";
import Square from "./svg/square.svg";
import TrashFill from "./svg/trash-fill.svg";
import Trash from "./svg/trash.svg";
import TrendingUpFill from "./svg/trending-up-fill.svg";
import TrendingUp from "./svg/trending-up.svg";
import UserFill from "./svg/user-fill.svg";
import User from "./svg/user.svg";
import Users from "./svg/users.svg";
import VerifiedFill from "./svg/verified-fill.svg";
import ViewGridFill from "./svg/view-grid-fill.svg";
import ViewGrid from "./svg/view-grid.svg";
import XFill from "./svg/x-fill.svg";
import X from "./svg/x.svg";

export const iconsList = {
  arrowLeft: {
    outline: ArrowLeft,
    fill: ArrowLeft,
  },
  bell: {
    outline: Bell,
    fill: BellFill,
  },
  bookmark: {
    outline: Bookmark,
    fill: BookmarkFill,
  },
  camera: {
    outline: Camera,
    fill: CameraFill,
  },
  colorPalette: {
    outline: ColorPalette,
    fill: ColorPalette,
  },
  comment: {
    outline: CommentSquare,
    fill: CommentSquareFill,
  },
  dotsHorizontal: {
    outline: DotsHorizontal,
    fill: DotsHorizontalFill,
  },
  exclamation: {
    outline: Exclamation,
    fill: ExclamationFill,
  },
  globe: {
    outline: Globe,
    fill: GlobeFill,
  },
  hashtag: {
    outline: Hashtag,
    fill: Hashtag,
  },
  heart: {
    outline: Heart,
    fill: HeartFill,
  },
  key: {
    outline: Key,
    fill: KeyFill,
  },
  link: {
    outline: Link,
    // TODO: add Link icon
    fill: Link,
  },
  lockClosed: {
    outline: LockClosed,
    fill: LockClosedFill,
  },
  mail: {
    outline: Mail,
    fill: MailFill,
  },
  photo: {
    outline: Photo,
    // TODO: add PhotoFill icon
    fill: Photo,
  },
  plog: {
    outline: Plog,
    // TODO: add PlogFill icon
    fill: Plog,
  },
  plus: {
    outline: Plus,
    fill: PlusFill,
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
  trash: {
    outline: Trash,
    fill: TrashFill,
  },
  trendingUp: {
    outline: TrendingUp,
    fill: TrendingUpFill,
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
  verified: {
    // TODO: remove this icon
    outline: VerifiedFill,
    fill: VerifiedFill,
  },
  viewGrid: {
    outline: ViewGrid,
    fill: ViewGridFill,
  },
  x: {
    outline: X,
    fill: XFill,
  },
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
  type?: "outline" | "fill";
}

export function Icon({
  name,
  className,
  type = "outline",
  ...props
}: IconProps) {
  const classes = classNames({
    icon: true,
  });

  const icon = iconsList[name][type];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className: `${classes} ${className}`,
    role: "icon",
    ...props,
  });
}
