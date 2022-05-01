import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import styles from "./EditProfile.module.css";
import { useEditUserValidations, useEditProfile } from "./hooks";
import { Button } from "@components/Buttons/Button";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { PageHeader } from "@components/PageHeader";
import { Textarea } from "@components/Textarea";
import { Toggle } from "@components/Toggle";
import { PageUrls } from "@enums/pages";

// TODO: refactor this component
export function EditProfile() {
  const { formMethods, user, onSubmit, loading } = useEditProfile();
  const {
    register,
    formState: { errors, isValid, isDirty },
    handleSubmit,
    control,
    setError,
    clearErrors,
  } = formMethods;
  const { checkUsernameResponse, checkEmailResponse } = useEditUserValidations({
    setError,
    clearErrors,
  });
  const { t } = useTranslation("editProfile");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.changeProfile}>
      <Card loading={!user} className={styles.card}>
        <PageHeader title={t("texts.editProfile")} />
        <div className={`${styles.inputContainer} px-4`}>
          <Input
            type="text"
            name="fullname"
            placeholder={t("labels.fullname")}
            label={t("labels.fullname")}
            register={register("fullName", {
              required: {
                value: true,
                message: t("errors.fullnameRequired"),
              },
            })}
            messageType={errors.fullName && "error"}
            message={errors.fullName?.message}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row md:space-x-4 px-4">
          <div className={styles.inputContainer}>
            <Input
              autoComplete="off"
              type="text"
              name="username"
              placeholder={t("labels.username")}
              label={t("labels.username")}
              register={register("username", {
                minLength: {
                  value: 5,
                  message: t("errors.usernameIsTooShort"),
                },
                required: {
                  value: true,
                  message: t("errors.usernameRequired"),
                },
              })}
              messageType={
                checkUsernameResponse.loading
                  ? undefined
                  : errors.username && "error"
              }
              message={errors.username?.message}
            />
          </div>
          <div className={styles.inputContainer}>
            <Input
              type="text"
              name="email"
              placeholder={t("labels.email")}
              label={t("labels.email")}
              register={register("email", {
                required: {
                  value: true,
                  message: t("errors.emailRequired"),
                },
              })}
              messageType={
                checkEmailResponse.loading ? undefined : errors.email && "error"
              }
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
            render={({ field: { value, onChange } }) => (
              <Toggle
                checked={value}
                className={styles.toggle}
                label={t("labels.private")}
                onChange={onChange}
              />
            )}
          />
        </div>

        {user && (
          <div className={styles.footer}>
            <LinkButton
              layout="outline"
              href={PageUrls.SETTINGS}
              className={styles.button}
            >
              {t("buttons.cancel")}
            </LinkButton>
            <Button
              layout="apply"
              loading={loading}
              disabled={!isValid || !isDirty}
              type="submit"
              className={styles.button}
            >
              {t("buttons.save")}
            </Button>
          </div>
        )}
      </Card>
    </form>
  );
}
