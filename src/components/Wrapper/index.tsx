import classNames from "classnames";
import { WrapperProps } from "./@types";
import styles from "./Wrapper.module.css";

export function Wrapper(props: WrapperProps) {
  const { children, className } = props;
  const classes = classNames(styles.wrapper, className);
  return <div className={classes}>{children}</div>;
}
