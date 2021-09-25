import { InputProps } from "./@types";
import styles from "./Input.module.css";

export function Input({
  type,
  name,
  placeholder,
  label,
  register,
}: InputProps) {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...register}
      />
    </div>
  );
}
