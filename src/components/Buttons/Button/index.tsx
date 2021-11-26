import classNames from "classnames";
import styles from "../Buttons.module.css";
import { ButtonProps } from "./@types";
import { Loading } from "@components/Loading";

export function Button(props: ButtonProps) {
  const {
    type,
    className,
    loadingClassName,
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
  );

  return (
    <button onClick={onClick} type={type || "button"} className={classes}>
      {loading ? <Loading className={loadingClassName || "w-6"} /> : children}
    </button>
  );
}
