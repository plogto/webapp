import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useModalContext } from "@contexts/ModalContext";
import { EDIT_USER } from "@graphql/user";
import { useUploadFile } from "@hooks/useUploadFile";
import type { UseImageProfileProps } from "../@types";
import type { EditUserMutation } from "@graphql/@types/user";

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

  useEffect(() => {
    if (data?.singleUploadFile) {
      editUser({ variables: { [key]: data.singleUploadFile.id } });
    }
  }, [data, editUser, key]);

  useEffect(() => {
    if (imagePreview) {
      const file = new File([imagePreview], "file.png", {
        type: "image/png",
      });
      singleUploadFile({
        variables: { file },
      });
    }
  }, [imagePreview, singleUploadFile]);

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
