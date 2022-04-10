import classNames from "classnames";
import { ToastProps } from "./@types";
import styles from "./Toast.module.css";

export function Toast(props: ToastProps) {
  const { title, type = "normal" } = props;

  const toastClasses = classNames(styles.toast, styles[type]);

  return <div className={toastClasses}>{title}</div>;
}
