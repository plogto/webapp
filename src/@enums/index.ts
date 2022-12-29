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
  BLUE = "BLUE",
  GREEN = "GREEN",
  RED = "RED",
  PURPLE = "PURPLE",
  ORANGE = "ORANGE",
  YELLOW = "YELLOW",
}

export enum BackgroundColor {
  LIGHT = "LIGHT",
  DIM = "DIM",
  DARK = "DARK",
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
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
}

export enum TicketStatusType {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  ACCEPTED = "ACCEPTED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  SOLVED = "SOLVED",
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

export const Statues = { ...CreditTransactionStatusType, ...TicketStatusType };

export type StatusType = typeof Statues;

export enum CreditTransactionDescriptionVariableType {
  TICKET = "TICKET",
  USER = "USER",
  TAG = "TAG",
}

export enum CreditTransactionTypeName {
  INVITE_USER = "INVITE_USER",
  REGISTER_BY_INVITATION_CODE = "REGISTER_BY_INVITATION_CODE",
}

export enum CreditTransactionType {
  ORDER = "ORDER",
  TRANSFER = "TRANSFER",
  COMMISSION = "COMMISSION",
  FUND = "FUND",
}

export enum CreditTransactionAmountType {
  DEPOSIT = "DEPOSIT",
  WITHDRAW = "WITHDRAW",
}

export enum LocalStorageKeys {
  AUTHORIZATION = "authorization",
  INVITATION_CODE = "invitationCode",
}

export enum ModalColor {
  NORMAL = "NORMAL",
  RED = "RED",
  BLUE = "BLUE",
  GREEN = "GREEN",
  YELLOW = "YELLOW",
}

export enum NotificationTypeName {
  WELCOME = "WELCOME",
  LIKE_POST = "LIKE_POST",
  REPLY_POST = "REPLY_POST",
  LIKE_REPLY = "LIKE_REPLY",
  FOLLOW_USER = "FOLLOW_USER",
  ACCEPT_USER = "ACCEPT_USER",
  MENTION_IN_POST = "MENTION_IN_POST",
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
  USERS = "USERS",
  TAGS = "TAGS",
}

export enum ButtonLayout {
  NORMAL = "NORMAL",
  FILL = "FILL",
  /* TODO: change the name and value */
  DANGER = "DANGER",
}

export enum QueryKeys {
  PARENT_URL = "parent_url",
  TAB = "tab",
}
