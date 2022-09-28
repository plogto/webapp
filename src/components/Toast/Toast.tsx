import classNames from "classnames";
import styles from "./Toast.module.css";
import { ToastProps } from "./Toast.types";

export function Toast(props: ToastProps) {
  const { title, type = "normal" } = props;

  const toastClasses = classNames(styles.toast, styles[type]);

  return <div className={toastClasses}>{title}</div>;
}
