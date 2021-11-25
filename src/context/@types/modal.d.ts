import { ReactNode, Dispatch, SetStateAction } from "react";

declare global {
  export type ModalContext = {
    isOpen: boolean;
    content: ReactNode;
  };

  export type SetModalContext = {
    setIsOpen: Dispatch<SetStateAction<ModalContext["isOpen"]>>;
    setContent: Dispatch<SetStateAction<ModalContext["content"]>>;
  };
}
