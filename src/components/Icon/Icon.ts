import { createElement, SVGAttributes } from "react";
import classNames from "classnames";
// icons
import ArrowLeft from "./svg/arrow-left.svg";
import BellFill from "./svg/bell-fill.svg";
import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import CameraFill from "./svg/camera-fill.svg";
import Camera from "./svg/camera.svg";
import ColorPalette from "./svg/color-palette.svg";
import CommentFill from "./svg/comment-square-fill.svg";
import Comment from "./svg/comment-square.svg";
import DotsHorizontal from "./svg/dots-horizontal.svg";
import ExclamationFill from "./svg/exclamation-fill.svg";
import Exclamation from "./svg/exclamation.svg";
import GlobeFill from "./svg/globe-fill.svg";
import Globe from "./svg/globe.svg";
import Hashtag from "./svg/hashtag.svg";
import HeartFill from "./svg/heart-fill.svg";
import Heart from "./svg/heart.svg";
import Key from "./svg/key.svg";
import Link from "./svg/link.svg";
import LockClosedFill from "./svg/lock-closed-fill.svg";
import LockClosed from "./svg/lock-closed.svg";
import Mail from "./svg/mail.svg";
import Photo from "./svg/photo.svg";
import PlogFill from "./svg/plog-fill.svg";
import PlusCircleFill from "./svg/plus-circle-fill.svg";
import PlusCircle from "./svg/plus-circle.svg";
import Plus from "./svg/plus.svg";
import RectangleHorizontalFill from "./svg/rectangle-horizontal-fill.svg";
import RectangleHorizontal from "./svg/rectangle-horizontal.svg";
import RectangleVerticalFill from "./svg/rectangle-vertical-fill.svg";
import RectangleVertical from "./svg/rectangle-vertical.svg";
import SquareFill from "./svg/square-fill.svg";
import Square from "./svg/square.svg";
import TrashFill from "./svg/trash-fill.svg";
import Trash from "./svg/trash.svg";
import TrendingUp from "./svg/trending-up.svg";
import User from "./svg/user.svg";
import Users from "./svg/users.svg";
import VerifiedFill from "./svg/verified-fill.svg";
import ViewGridFill from "./svg/view-grid-fill.svg";
import ViewGrid from "./svg/view-grid.svg";
import X from "./svg/x.svg";

export const iconsList = {
  ArrowLeft,
  BellFill,
  Bookmark,
  BookmarkFill,
  Camera,
  CameraFill,
  ColorPalette,
  Comment,
  CommentFill,
  DotsHorizontal,
  Exclamation,
  ExclamationFill,
  Globe,
  GlobeFill,
  Hashtag,
  Heart,
  HeartFill,
  Key,
  Link,
  LockClosed,
  LockClosedFill,
  Mail,
  Photo,
  PlogFill,
  PlusCircleFill,
  PlusCircle,
  Plus,
  RectangleHorizontal,
  RectangleHorizontalFill,
  RectangleVertical,
  RectangleVerticalFill,
  Square,
  SquareFill,
  Trash,
  TrashFill,
  TrendingUp,
  User,
  Users,
  VerifiedFill,
  ViewGrid,
  ViewGridFill,
  X,
};

export type IconNames = keyof typeof iconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
}

export function Icon({ name, className, ...props }: IconProps) {
  const classes = classNames({
    icon: true,
  });

  const icon = iconsList[name];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className: classNames(classes, className),
    role: "icon",
    ...props,
  });
}
