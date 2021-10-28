import { InputProps } from "./@types";
import styles from "./Input.module.css";

export function Input(props: InputProps) {
  const { type, name, placeholder, label, register } = props;

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
