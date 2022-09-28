import classNames from "classnames";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.types";

export function Textarea(props: TextareaProps) {
  const {
    name,
    rows,
    placeholder,
    label,
    register,
    message,
    messageType,
    ...others
  } = props;

  const wrapperClasses = classNames(
    styles.wrapper,
    // TODO: fix styles type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messageType && styles[messageType as any],
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.textarea}
        rows={rows || 3}
        {...register}
        {...others}
      />
      {<small className={styles.message}>{message}</small>}
    </div>
  );
}
