import { isMobile } from "react-device-detect";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import { Toggle } from "@components/Toggle";
import { ModalProvider } from "@contexts/ModalContext";
import styles from "./EditProfile.module.css";
import { AvatarProfile } from "./components/AvatarProfile";
import { useEditUserValidations, useEditProfile } from "./hooks";

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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      <Card
        shadow={!isMobile}
        rounded={!isMobile}
        loading={!user}
        className={styles.editProfile}
      >
        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className={styles.image}>
            <ModalProvider>
              <AvatarProfile avatar={user?.avatar} />
            </ModalProvider>
          </div>
          <div className="w-full flex flex-col space-y-4">
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
        </div>
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
        <Textarea
          name="bio"
          placeholder={t("labels.bio")}
          label={t("labels.bio")}
          register={register("bio")}
          messageType={errors.bio && "error"}
          message={errors.bio?.message}
        />
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
        {user && (
          <div className={styles.footer}>
            <Button
              layout="apply"
              loading={loading}
              disabled={!isValid || !isDirty}
              type="submit"
              className={styles.button}
            >
              {t("buttons.apply")}
            </Button>
          </div>
        )}
      </Card>
    </form>
  );
}
