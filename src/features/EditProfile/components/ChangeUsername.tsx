import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { USERNAME_PATTERN } from "@constants";
import { ButtonLayout } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Input } from "@components/Input";
import { ChangeUsernameModal } from "@components/Modal";
import type { ChangeUsernameProps } from "../EditProfile.types";
import { useChangeUsername } from "../hooks";

export function ChangeUsername(props: ChangeUsernameProps) {
  const { username, isOpen, closeModal } = props;
  const { checkUsername, formMethods, onSubmit } = useChangeUsername({
    closeModal,
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = formMethods;
  const { t } = useTranslation(["modal", "editProfile"]);

  useEffect(() => {
    isOpen &&
      reset({
        username,
      });
  }, [isOpen, reset, username]);

  return (
    <ChangeUsernameModal
      title={t("editProfile:texts.changeUsername")}
      isOpen={isOpen}
      closeModal={closeModal}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          autoComplete="off"
          type="text"
          name="username"
          placeholder={t("editProfile:labels.username")}
          label={t("editProfile:labels.username")}
          register={register("username", {
            minLength: {
              value: 5,
              message: t("editProfile:errors.usernameIsTooShort"),
            },
            required: {
              value: true,
              message: t("editProfile:errors.usernameRequired"),
            },
            pattern: {
              value: USERNAME_PATTERN,
              message: t("editProfile:errors.usernameIsNotValid"),
            },
            validate: value => {
              return checkUsername(value) ? false : true;
            },
          })}
          messageType={errors.username && "error"}
          message={errors.username?.message}
        />
        <div className="modal-buttons">
          <Button
            type="submit"
            className={classNames("modal-button normal")}
            disabled={!isDirty || !isValid}
          >
            {t("modal:buttons.apply")}
          </Button>
          <Button
            type="button"
            layout={ButtonLayout.NORMAL}
            onClick={closeModal}
            className="modal-button"
          >
            {t("modal:buttons.cancel")}
          </Button>
        </div>
      </form>
    </ChangeUsernameModal>
  );
}
