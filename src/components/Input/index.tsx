import { UseFormRegisterReturn } from "react-hook-form";

import styles from "./Input.module.css";

type Props = {
  type: "text" | "password";
  name: string;
  label?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
};

export function Input({
  type,
  name,
  placeholder,
  label,
  register,
}: Props): JSX.Element {
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
