import { useTranslation } from "react-i18next";
import styles from "./Login.module.css";
import { useLogin } from "./hooks/useLogin";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function Login() {
  const { formMethods, submit, error, loading } = useLogin();
  const { register, handleSubmit } = formMethods;
  const { t } = useTranslation(["auth", "common"]);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <h1 className={styles.logo}>{t("common:logoName")}</h1>
        {error && (
          <div className="mt-3 w-full">
            <div className={styles.error}>{error.message}</div>
          </div>
        )}
        <div className="mt-2">
          <Input
            type="text"
            name="username"
            placeholder={t("auth:labels.username")}
            label={t("auth:labels.username")}
            register={register("username", {
              required: true,
            })}
          />
        </div>
        <div className="mt-4">
          <Input
            type="password"
            name="password"
            placeholder={t("auth:labels.password")}
            label={t("auth:labels.password")}
            register={register("password", {
              required: true,
            })}
          />
        </div>
        <div className="mt-5">
          <Button
            loading={loading}
            type="submit"
            className={styles.submitButton}
          >
            {t("auth:buttons.login")}
          </Button>
        </div>
      </form>
    </div>
  );
}
