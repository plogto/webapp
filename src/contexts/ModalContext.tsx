import { createContext, ReactNode, useContext, useState } from "react";

const initialModal = {
  isOpen: false,
};

const ModalContext = createContext<ModalContext>(initialModal);
const ModalContextSetState = createContext<SetModalContext>({
  setIsOpen: () => {},
});

interface Props {
  children: ReactNode;
  initialIsOpen?: boolean;
}

export function ModalProvider({ children, initialIsOpen }: Props) {
  const [isOpen, setIsOpen] = useState<ModalContext["isOpen"]>(
    initialModal.isOpen,
  );

  return (
    <ModalContext.Provider value={{ isOpen: initialIsOpen || isOpen }}>
      <ModalContextSetState.Provider
        value={{
          setIsOpen,
        }}
      >
        {children}
      </ModalContextSetState.Provider>
    </ModalContext.Provider>
  );
}

function useModalState() {
  const { isOpen } = useContext(ModalContext);

  return { isOpen };
}

function useModalSetState() {
  const { setIsOpen } = useContext(ModalContextSetState);

  return { setIsOpen };
}

export function useModalContext() {
  const { isOpen } = useModalState();
  const { setIsOpen } = useModalSetState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, setIsOpen, openModal, closeModal };
}
