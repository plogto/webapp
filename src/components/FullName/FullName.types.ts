import type { Size } from "@t/size";

export interface FullNameProps {
  fullName: string;
  isVerified?: boolean;
  size?: "extra" | Size;
  className?: string;
}
