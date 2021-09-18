import classNames from "classnames";
import { ReactNode } from "react";

import styles from "./Wrapper.module.css";

type Props = {
  children?: ReactNode;
  className?: string;
};

export function Wrapper({ children, className }: Props): JSX.Element {
  const classes = classNames(styles.wrapper, className);
  return <div className={classes}>{children}</div>;
}
