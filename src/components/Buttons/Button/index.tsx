import classNames from "classnames";
import styles from "../Buttons.module.css";
import { Loading } from "@components/Loading";
import type { ButtonProps } from "./@types";

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
      {loading ? <Loading className={loadingClassName} /> : children}
    </button>
  );
}
