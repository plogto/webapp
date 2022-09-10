import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Input } from "@components/Input";
import { PageUrls } from "@enums/pages";
import styles from "./Auth.module.css";
import { InviterUser } from "./InviterUser";
import { useLogin } from "./hooks/useLogin";

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
      <div className={styles.card}>
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
            <InviterUser className="ml-2 mb-3" />
            <Input
              type="text"
              name="username"
              icon="User"
              placeholder={t("auth:labels.username")}
              register={register("username")}
            />
          </div>
          <div className="mt-5">
            <Input
              type="password"
              name="password"
              icon="LockClosed"
              placeholder={t("auth:labels.password")}
              register={register("password")}
            />
          </div>
          <div className="mt-5">
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
      </div>
    </div>
  );
}
