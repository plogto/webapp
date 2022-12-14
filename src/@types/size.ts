export type Size = "small" | "normal" | "large";
export type AvatarSize = "tiny" | "mini" | Size;
export type FullNameSize = "tiny" | Size;
export type HeaderSize = Size;
export type ContentSize = Size;
export type DateSize = Size;
export type FooterSize = Exclude<Size, "large">;
