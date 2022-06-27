import classNames from "classnames";
import { Loader } from "@components/Loader";
import styles from "../Buttons.module.css";
import type { ButtonProps } from "./Button.types";

export function Button(props: ButtonProps) {
  const {
    type = "button",
    layout,
    className,
    loadingClassName = "w-5",
    children,
    loading,
    disabled,
    onClick,
  } = props;

  const classes = classNames(
    styles.button,
    className,
    loading && styles.loading,
    disabled && styles.disabled,
    layout && styles[layout],
  );

  return (
    <button onClick={onClick} type={type} className={classes}>
      {loading ? <Loader className={loadingClassName} /> : children}
    </button>
  );
}
