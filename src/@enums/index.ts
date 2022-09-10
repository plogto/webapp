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
  POSTS = "POSTS",
  SAVED = "SAVED",
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

export enum CreditTransactionDescriptionVariableType {
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
