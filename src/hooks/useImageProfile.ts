import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { ImageProfileKey } from "@enums";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { useModalContext } from "@contexts/ModalContext";
import type { EditUserMutation } from "@graphql/@types/user";
import { EDIT_USER } from "@graphql/user";
import { useUploadFile } from "@hooks/useUploadFile";
import type { UseImageProfileProps } from "./@types";

export function useImageProfile(props: UseImageProfileProps) {
  const { key } = props;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<Blob>();
  const { closeModal, openModal, isOpen } = useModalContext();
  const [editUser] = useMutation<EditUserMutation>(EDIT_USER);
  const {
    singleUploadFile,
    singleUploadFileResponse: { data },
  } = useUploadFile();
  const { t } = useTranslation("profile");
  const { setUser } = useAccountContext();

  useEffect(() => {
    if (data?.singleUploadFile) {
      editUser({
        variables: { [key]: data.singleUploadFile.id },
      }).then(({ data }) => {
        setUser(data?.editUser);
      });
    }
  }, [data, editUser, key, setUser]);

  const prepareSuccessMessage = useCallback(
    (key: ImageProfileKey) => {
      switch (key) {
        case ImageProfileKey.AVATAR:
          return t("toasts.avatarUploaded");
        case ImageProfileKey.BACKGROUND:
          return t("toasts.backgroundUploaded");
      }
    },
    [t],
  );

  useEffect(() => {
    if (imagePreview) {
      const file = new File([imagePreview], "file.png", {
        type: "image/png",
      });
      toast.promise(
        singleUploadFile({
          variables: { file },
        }),
        {
          loading: t("toasts.uploadingFile"),
          success: prepareSuccessMessage(key),
          error: t("toasts.somethingWentWrong"),
        },
      );
    }
  }, [imagePreview, key, prepareSuccessMessage, singleUploadFile, t]);

  const removeImage = useCallback(() => {
    editUser({ variables: { [key]: "" } });
    closeModal();
  }, [closeModal, editUser, key]);

  const onClickInputFile = useCallback(() => {
    closeModal();
    inputFileRef.current?.click();
  }, [closeModal]);

  return {
    inputFileRef,
    onClickInputFile,
    setImagePreview,
    closeModal,
    openModal,
    isOpen,
    removeImage,
  };
}
