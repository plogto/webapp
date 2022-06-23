import type { Dispatch, SetStateAction } from "react";

declare global {
  export interface ModalContext {
    isOpen: boolean;
  }

  export interface SetModalContext {
    setIsOpen: Dispatch<SetStateAction<ModalContext["isOpen"]>>;
  }
}
