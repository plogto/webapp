import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { Input } from "@components/Input";
import { PageUrls } from "@enums/pages";
import styles from "./Auth.module.css";
import { useRegister } from "./hooks/useRegister";
import Link from "next/link";

export function Register() {
  const { formMethods, onSubmit, error, loading } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = formMethods;
  const { t } = useTranslation(["auth", "common"]);

  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link href={PageUrls.HOME}>
            <a className={styles.logoContainer}>
              <Icon name="plog" className={styles.logo} />
              <h1 className={styles.logoTitle}>{t("common:logoName")}</h1>
            </a>
          </Link>
          {error && (
            <div className="mt-3 w-full">
              <div className={styles.error}>{error.message}</div>
            </div>
          )}
          <Input
            type="text"
            name="fullName"
            icon="user"
            placeholder={t("auth:labels.fullName")}
            register={register("fullName")}
            messageType={errors.fullName && "error"}
            message={errors.fullName?.message}
          />
          <Input
            type="text"
            name="email"
            icon="mail"
            placeholder={t("auth:labels.email")}
            register={register("email")}
            messageType={errors.email && "error"}
            message={errors.email?.message}
          />
          <Input
            type="password"
            name="password"
            icon="lockClosed"
            placeholder={t("auth:labels.password")}
            register={register("password")}
            messageType={errors.password && "error"}
            message={errors.password?.message}
          />
          <Button
            loading={loading}
            type="submit"
            className={styles.submitButton}
            disabled={!isValid}
            loadingClassName={styles.submitButtonLoading}
          >
            {t("auth:buttons.register")}
          </Button>
        </form>
        <div className={styles.footer}>
          <span>{t("auth:texts.registerFooter")}</span>
          <Link href={PageUrls.LOGIN}>
            <a className={styles.link}>Log In</a>
          </Link>
        </div>
      </Card>
    </div>
  );
}
