import { ButtonProps } from "./@types";
import styles from "./Button.module.css";
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

  const classes = `
    button 
    ${loading ? styles.loading : ""} 
    ${disabled ? styles.disabled : ""} 
    ${className || ""}
  `;

  return (
    <button onClick={onClick} type={type || "button"} className={classes}>
      {loading ? <Loading className={loadingClassName || "w-6"} /> : children}
    </button>
  );
}
