// TODO: split this file
export enum DateType {
  LONG = "LONG",
  SHORT = "SHORT",
}

export enum RepliesView {
  NONE = "NONE",
  QUICK = "QUICK",
  COMPLETE = "COMPLETE",
  THREAD = "THREAD",
}

export enum PostTypeKey {
  PAGE = "PAGE",
  CARD = "CARD",
  REPLY = "REPLY",
  CHILD = "CHILD",
  PREVIEW = "PREVIEW",
}

export enum CropImageTypeKey {
  AVATAR = "AVATAR",
  BACKGROUND = "BACKGROUND",
  POST = "POST",
}

export enum PrimaryColor {
  BLUE = "blue",
  GREEN = "green",
  RED = "red",
  PURPLE = "purple",
  ORANGE = "orange",
  YELLOW = "yellow",
}

export enum BackgroundColor {
  LIGHT = "light",
  DIM = "dim",
  DARK = "dark",
}

export enum ProfileActiveTab {
  POSTS = "posts",
  REPLIES = "replies",
  LIKES = "likes",
  SAVED = "saved",
}

export enum ConnectionsActiveTab {
  FOLLOWING = "FOLLOWING",
  FOLLOWERS = "FOLLOWERS",
}

export enum CreditTransactionStatusType {
  APPROVED = "approved",
  PENDING = "pending",
  FAILED = "failed",
  CANCELED = "canceled",
}

export enum TicketStatusType {
  OPEN = "open",
  CLOSED = "closed",
  ACCEPTED = "accepted",
  APPROVED = "approved",
  REJECTED = "rejected",
  SOLVED = "solved",
}

export enum TicketPermissionType {
  NEW_MESSAGE = "NEW_MESSAGE",
  OPEN = "OPEN",
  CLOSE = "CLOSE",
  ACCEPT = "ACCEPT",
  APPROVE = "APPROVE",
  REJECT = "REJECT",
  SOLVE = "SOLVE",
}

export type StatusType = CreditTransactionStatusType | TicketStatusType;

export enum CreditTransactionDescriptionVariableType {
  TICKET = "ticket",
  USER = "user",
  TAG = "tag",
}

export enum CreditTransactionTypeName {
  INVITE_USER = "invite_user",
  REGISTER_BY_INVITATION_CODE = "register_by_invitation_code",
}

export enum CreditTransactionType {
  ORDER = "order",
  TRANSFER = "transfer",
  COMMISSION = "commission",
  FUND = "fund",
}

export enum CreditTransactionAmountType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

export enum LocalStorageKeys {
  AUTHORIZATION = "authorization",
  INVITATION_CODE = "invitationCode",
}

export enum ModalColor {
  NORMAL = "normal",
  RED = "red",
  BLUE = "blue",
  GREEN = "green",
  YELLOW = "yellow",
}

export enum NotificationTypeName {
  WELCOME = "welcome",
  LIKE_POST = "like_post",
  REPLY_POST = "reply_post",
  LIKE_REPLY = "like_reply",
  FOLLOW_USER = "follow_user",
  ACCEPT_USER = "accept_user",
  MENTION_IN_POST = "mention_in_post",
}

export enum PageLoaderHeightType {
  FULL = "FULL",
  NORMAL = "NORMAL",
}

export enum UsersListDataKey {
  FOLLOWING = "following",
  FOLLOWER = "follower",
  USER = "user",
}

export enum ImageProfileKey {
  AVATAR = "avatar",
  BACKGROUND = "background",
}

export enum SearchFilters {
  USERS = "users",
  TAGS = "tags",
}

export enum ButtonLayout {
  NORMAL = "normal",
  FILL = "fill",
  /* TODO: change the name and value */
  DANGER = "danger",
}

export enum QueryKeys {
  PARENT_URL = "parent_url",
  TAB = "tab",
}

export enum AnimationPattern {
  ZOOM_IN = "zoomIn",
  BUZZ = "buzz",
}
