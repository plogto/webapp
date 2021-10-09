import styles from "./Button.module.css";
import { Loading } from "@components/Loading";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit";
  className?: string;
  loadingClassName?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  type,
  className,
  loadingClassName,
  children,
  loading,
  disabled,
  onClick,
}: ButtonProps) {
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
