import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";

export function Input(props: InputProps) {
  const {
    type,
    name,
    icon,
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
    messageType && styles[messageType as any],
    className,
  );

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={classNames(styles.input, icon && styles.isIcon)}>
        {icon && (
          <span className={styles.iconWrapper}>
            <Icon name={icon} className={styles.icon} />
          </span>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          {...register}
          {...others}
        />
      </div>
      {<small className={styles.message}>{message}</small>}
    </div>
  );
}
