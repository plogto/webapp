import type { Size } from "@t/size";
import type { User } from "@t/user";

export type UserInfoProps = {
  user?: User;
  showAvatar?: boolean;
  size?: Exclude<Size, "small">;
};
