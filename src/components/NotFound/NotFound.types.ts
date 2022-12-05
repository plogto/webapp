import type { IconNames } from "@components/Icon";
import type { Placeholder } from "@t/placeholder";

export interface NotFoundProps extends Partial<Placeholder> {
  title?: string;
  icon?: IconNames;
}
