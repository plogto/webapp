import classNames from "classnames";
import { Icon } from "@components/Icon";
import type { LoaderProps } from "./Loader.types";

export function Loader(props: LoaderProps) {
  const { className } = props;
  const classes = classNames("animate-spin text-primary", className);

  return <Icon name="Loader" className={classes} />;
}
