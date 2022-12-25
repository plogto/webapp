import { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { ImageProfileKey } from "@enums";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { useModalContext } from "@contexts/ModalContext";
import type { EditUserMutation } from "@graphql/@types/user";
import { EDIT_USER } from "@graphql/user";
import { useUploadFiles } from "@hooks/useUploadFiles";
import type { UseImageProfileProps } from "./@types";
import isEmpty from "lodash/isEmpty";

export function useImageProfile(props: UseImageProfileProps) {
  const { key } = props;
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<Blob>();
  const { closeModal, openModal, isOpen } = useModalContext();
  const [editUser] = useMutation<EditUserMutation>(EDIT_USER);
  const {
    uploadFiles,
    uploadFilesResponse: { data },
  } = useUploadFiles();
  const { t } = useTranslation("profile");
  const { setUser } = useAccountContext();

  useEffect(() => {
    if (!isEmpty(data?.uploadFiles)) {
      editUser({
        variables: { [key]: data?.uploadFiles?.[0].id },
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
      const files = [
        new File([imagePreview], "file.png", {
          type: "image/png",
        }),
      ];
      toast.promise(
        uploadFiles({
          variables: { files },
        }),
        {
          loading: t("toasts.uploadingFile"),
          success: prepareSuccessMessage(key),
          error: t("toasts.somethingWentWrong"),
        },
      );
    }
  }, [imagePreview, key, prepareSuccessMessage, uploadFiles, t]);

  const removeImage = useCallback(() => {
    editUser({ variables: { [key]: "" } }).then(({ data }) => {
      setUser(data?.editUser);
    });
    closeModal();
  }, [closeModal, editUser, key, setUser]);

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
