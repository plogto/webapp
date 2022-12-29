import type { ReactNode } from "react";
import type { WithPageInfo } from "@t";
import type { Placeholder } from "@t/placeholder";

export interface ListWrapperProps {
  data?: Omit<WithPageInfo<unknown>, "edges">;
  isEdgesExists?: boolean;
  children: ReactNode;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
}
