import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import styles from "./ChangePassword.module.css";
import type { Inputs } from "./ChangePassword.types";
import { useChangePassword } from "./useChangePassword";

export function ChangePassword() {
  const { formMethods, user, onSubmit } = useChangePassword();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = formMethods;
  const { t } = useTranslation("changePassword");

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <Card
        shadow={!isMobile}
        rounded={!isMobile}
        loading={!user}
        className={styles.changePassword}
      >
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

        <div className={styles.footer}>
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
