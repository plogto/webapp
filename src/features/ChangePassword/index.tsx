import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./ChangePassword.module.css";
import { useChangePassword } from "./hooks/useChangePassword";
import { Button } from "@components/Buttons/Button";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { Input } from "@components/Input";
import { PageUrls } from "@enums/pages";
import type { Inputs } from "./@types";

export function ChangePassword() {
  const { formMethods, user, onSubmit } = useChangePassword();
  const { t } = useTranslation("changePassword");
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = formMethods;

  const inputs: Inputs[] = [
    {
      name: "oldPassword",
      label: t("labels.oldPassword"),
    },
    {
      name: "newPassword",
      label: t("labels.newPassword"),
    },
    {
      name: "confirmPassword",
      label: t("labels.confirmPassword"),
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card loading={!user} className={styles.changePassword}>
        <div className={styles.header}>
          <Link href={PageUrls.SETTINGS}>
            <a className={styles.back}>
              <Icon className={styles.icon} name="chevronLeft" />
            </a>
          </Link>
          <h2 className={styles.title}>{t("texts.changePassword")}</h2>
        </div>

        <div className={styles.inputs}>
          {inputs.map(({ name, label }) => (
            <Input
              className={styles.input}
              key={`input-${name}`}
              type="password"
              name={name}
              label={label}
              register={register(name)}
              messageType={errors[name] && "error"}
              message={errors[name]?.message}
            />
          ))}
        </div>

        <div className={styles.footer}>
          <LinkButton
            layout="cancel"
            href={PageUrls.SETTINGS}
            className={styles.button}
          >
            {t("buttons.cancel")}
          </LinkButton>
          <Button
            layout="apply"
            disabled={!isValid}
            type="submit"
            className={styles.button}
            loadingClassName="w-5"
          >
            {t("buttons.apply")}
          </Button>
        </div>
      </Card>
    </form>
  );
}
