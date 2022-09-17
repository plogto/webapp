import type { FullNameSize } from "@t/size";

export interface FullNameProps {
  fullName: string;
  isVerified?: boolean;
  size?: FullNameSize;
  className?: string;
  type?: "short" | "complete";
}
