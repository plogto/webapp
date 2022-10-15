import { createElement, SVGAttributes } from "react";
import classNames from "classnames";
// icons
import ArrowLeft from "./svg/arrow-left.svg";
import BellFill from "./svg/bell-fill.svg";
import BookmarkFill from "./svg/bookmark-fill.svg";
import Bookmark from "./svg/bookmark.svg";
import CameraFill from "./svg/camera-fill.svg";
import Camera from "./svg/camera.svg";
import CheckCircle from "./svg/check-circle.svg";
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
import Inbox from "./svg/inbox.svg";
import Key from "./svg/key.svg";
import Link from "./svg/link.svg";
import Loader from "./svg/loader.svg";
import LockClosedFill from "./svg/lock-closed-fill.svg";
import LockClosed from "./svg/lock-closed.svg";
import Mail from "./svg/mail.svg";
import Pencil from "./svg/pencil.svg";
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
import Support from "./svg/support.svg";
import ThumbsDown from "./svg/thumbs-down.svg";
import ThumbsUp from "./svg/thumbs-up.svg";
import TrashFill from "./svg/trash-fill.svg";
import Trash from "./svg/trash.svg";
import TrendingUp from "./svg/trending-up.svg";
import UserPlus from "./svg/user-plus.svg";
import User from "./svg/user.svg";
import Users from "./svg/users.svg";
import VerifiedFill from "./svg/verified-fill.svg";
import ViewGridFill from "./svg/view-grid-fill.svg";
import ViewGrid from "./svg/view-grid.svg";
import XCircle from "./svg/x-circle.svg";
import X from "./svg/x.svg";

export const IconsList = {
  ArrowLeft,
  BellFill,
  BookmarkFill,
  Bookmark,
  CameraFill,
  Camera,
  CheckCircle,
  ColorPalette,
  CommentFill,
  Comment,
  DotsHorizontal,
  ExclamationFill,
  Exclamation,
  GlobeFill,
  Globe,
  Hashtag,
  HeartFill,
  Heart,
  Inbox,
  Key,
  Link,
  Loader,
  LockClosedFill,
  LockClosed,
  Mail,
  Pencil,
  Photo,
  PlogFill,
  PlusCircleFill,
  PlusCircle,
  Plus,
  RectangleHorizontalFill,
  RectangleHorizontal,
  RectangleVerticalFill,
  RectangleVertical,
  SquareFill,
  Square,
  Support,
  TrashFill,
  Trash,
  TrendingUp,
  ThumbsDown,
  ThumbsUp,
  UserPlus,
  User,
  Users,
  VerifiedFill,
  ViewGridFill,
  ViewGrid,
  X,
  XCircle,
};

export type IconNames = keyof typeof IconsList;

export interface IconProps extends SVGAttributes<SVGElement> {
  name: IconNames;
  className?: string;
}

export function Icon({ name, className, ...props }: IconProps) {
  const classes = classNames({
    icon: true,
  });

  const icon = IconsList[name];

  if (!icon) {
    throw Error(`"${name}" is not a valid icon name`);
  }

  return createElement(icon, {
    className: classNames(classes, className),
    role: "icon",
    ...props,
  });
}
