import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./Login.module.css";
import { useLogin } from "./hooks/useLogin";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { formMethods, submit, error, loading } = useLogin();
  const { register, handleSubmit } = formMethods;
  const { t } = useTranslation("auth");

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h1 className={styles.logo}>Poster</h1>
        {error && (
          <div className="mt-3 w-full">
            <div className={styles.error}>{error.message}</div>
          </div>
        )}
        <div className="mt-2">
          <Input
            type="text"
            name="username"
            placeholder={t("labels.username")}
            label={t("labels.username")}
            register={register("username", {
              required: true,
            })}
          />
        </div>
        <div className="mt-4">
          <Input
            type="password"
            name="password"
            placeholder={t("labels.password")}
            label={t("labels.password")}
            register={register("password", {
              required: true,
            })}
          />
        </div>
        <div className="mt-5">
          <Button
            loading={loading}
            type="submit"
            className={styles.submitButton}>
            {t("buttons.login")}
          </Button>
        </div>
      </form>
    </div>
  );
}
