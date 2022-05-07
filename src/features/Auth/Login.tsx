import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { Input } from "@components/Input";
import { PageUrls } from "@enums/pages";
import styles from "./Auth.module.css";
import { useLogin } from "./hooks/useLogin";
import Link from "next/link";

export function Login() {
  const { formMethods, onSubmit, error, loading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = formMethods;
  const { t } = useTranslation(["auth", "common"]);

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link href={PageUrls.HOME}>
            <a className={styles.logoContainer}>
              <Icon name="PlogFill" className={styles.logo} />
              <h1 className={styles.logoTitle}>{t("common:logoName")}</h1>
            </a>
          </Link>
          {error && (
            <div className="mt-3 w-full">
              <div className={styles.error}>{error.message}</div>
            </div>
          )}
          <div className="mt-2">
            <Input
              type="text"
              name="username"
              icon="User"
              placeholder={t("auth:labels.username")}
              register={register("username")}
            />
          </div>
          <div className="mt-4">
            <Input
              type="password"
              name="password"
              icon="LockClosed"
              placeholder={t("auth:labels.password")}
              register={register("password")}
            />
          </div>
          <div className="mt-6">
            <Button
              loading={loading}
              type="submit"
              className={styles.submitButton}
              loadingClassName={styles.submitButtonLoading}
              disabled={!isValid}
            >
              {t("auth:buttons.login")}
            </Button>
          </div>
        </form>
        <div className={styles.footer}>
          <span> {t("auth:texts.loginFooter")}</span>
          <Link href={PageUrls.REGISTER}>
            <a className={styles.link}>Register</a>
          </Link>
        </div>
      </Card>
    </div>
  );
}
