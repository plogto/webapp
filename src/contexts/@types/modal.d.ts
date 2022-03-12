import { Dispatch, SetStateAction } from "react";

declare global {
  export type ModalContext = {
    isOpen: boolean;
  };

  export type SetModalContext = {
    setIsOpen: Dispatch<SetStateAction<ModalContext["isOpen"]>>;
  };
}
