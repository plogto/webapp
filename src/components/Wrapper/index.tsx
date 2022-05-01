import classNames from "classnames";
import { WrapperProps } from "./@types";
import styles from "./Wrapper.module.css";

export function Wrapper(props: WrapperProps) {
  const { children, className, paddingSize = 4 } = props;
  const paddingClass = `padding-${paddingSize}`;
  const classes = classNames(styles.wrapper, styles[paddingClass], className);
  return <div className={classes}>{children}</div>;
}
