import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./Settings.module.css";
import { useSettings } from "./hooks/useSettings";
import { Avatar } from "@components/Avatar";
import { Button } from "@components/Buttons/Button";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Toggle } from "@components/Toggle";
import { useNavigation } from "@hooks/useNavigation";

export function Settings() {
  const { formMethods, user, editUser, editUserResponse } = useSettings();
  const { loading } = editUserResponse;
  const { formatProfilePageRoute } = useNavigation();
  const {
    register,
    formState: { errors, isValid },
    getValues,
    handleSubmit,
    control,
    setValue,
  } = formMethods;
  const { t } = useTranslation("settings");

  const handleToggleIsPrivate = useCallback((value: boolean) => {
    setValue("isPrivate", value);
  }, []);

  return (
    <form onSubmit={handleSubmit(editUser)} className={styles.settings}>
      <Card loading={!user} className={styles.card}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} />
        </div>
        <div className={`${styles.inputContainer} px-4`}>
          <Input
            type="text"
            name="fullname"
            placeholder={t("labels.fullname")}
            label={t("labels.fullname")}
            register={register("fullName", {
              required: {
                value: true,
                message: t("errors.fullname"),
              },
            })}
            messageType={errors.fullName && "error"}
            message={errors.fullName?.message}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:space-x-4 px-4">
          {false && (
            <div className={styles.inputContainer}>
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
          )}
          <div className={styles.inputContainer}>
            <Input
              type="text"
              name="email"
              placeholder={t("labels.email")}
              label={t("labels.email")}
              register={register("email", {
                required: {
                  value: true,
                  message: t("errors.email"),
                },
              })}
              messageType={errors.email && "error"}
              message={errors.email?.message}
            />
          </div>
        </div>
        <div className={`${styles.inputContainer} px-4`}>
          <Textarea
            name="bio"
            placeholder={t("labels.bio")}
            label={t("labels.bio")}
            register={register("bio")}
            messageType={errors.bio && "error"}
            message={errors.bio?.message}
          />
        </div>
        <div className="flex space-x-3 mt-5">
          <Controller
            name="isPrivate"
            control={control}
            defaultValue={getValues("isPrivate")}
            render={({ field }) => (
              <Toggle
                checked={field.value}
                className={styles.toggle}
                label={t("labels.private")}
                onChange={handleToggleIsPrivate}
              />
            )}
          />
        </div>

        {user && (
          <div className={styles.cardFooter}>
            <LinkButton
              href={formatProfilePageRoute(user.username)}
              className={styles.cancelButton}
            >
              {t("buttons.cancel")}
            </LinkButton>
            <Button
              loading={loading}
              disabled={!isValid}
              type="submit"
              className={styles.saveButton}
              loadingClassName="w-5"
            >
              {t("buttons.save")}
            </Button>
          </div>
        )}
      </Card>
    </form>
  );
}
