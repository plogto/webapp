import type { AvatarSize } from "@t/size";
import type { User } from "@t/user";

export type AvatarProps = {
  avatar?: User["avatar"];
  size?: AvatarSize;
  className?: string;
};
