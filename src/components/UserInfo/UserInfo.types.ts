import type { Size } from "@t/size";
import type { User } from "@t/user";

export interface UserInfoProps {
  user?: User;
  showAvatar?: boolean;
  size?: Size;
}
