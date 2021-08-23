import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "../Search.module.css";

type Props = {
  register: UseFormRegisterReturn;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchInput({ register, onChange }: Props) {
  return (
    <div className={styles.header}>
      <input
        {...register}
        onInput={onChange}
        placeholder="Search"
        name="expression"
        type="text"
        autoComplete="off"
        className={styles.searchInput}
      />
    </div>
  );
}
