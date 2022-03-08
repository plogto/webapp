import classNames from "classnames";
import { InputProps } from "./@types";
import styles from "./Input.module.css";

export function Input(props: InputProps) {
  const {
    type,
    name,
    placeholder,
    label,
    register,
    message,
    messageType,
    className,
    ...others
  } = props;

  const wrapperClasses = classNames(
    styles.wrapper,
    // TODO: fix styles type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styles[messageType as any],
    className,
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...register}
        {...others}
      />
      {<small className={styles.message}>{message}</small>}
    </div>
  );
}
