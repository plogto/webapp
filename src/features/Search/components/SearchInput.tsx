import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "../Search.module.css";

type Props = {
  register: UseFormRegisterReturn;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchInput({ register, onChange }: Props) {
  const { t } = useTranslation("search");
  return (
    <div className={styles.header}>
      <input
        {...register}
        onInput={onChange}
        placeholder={t("placeholders.search")}
        name="expression"
        type="text"
        autoComplete="off"
        className={styles.searchInput}
      />
    </div>
  );
}
