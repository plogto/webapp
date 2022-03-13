export type Size = "small" | "normal" | "large";
export type AvatarSize = "tiny" | Size | "extra";
export type HeaderSize = Size;
export type ContentSize = Size;
export type DateSize = Size;
export type FooterSize = Exclude<Size, "large">;
