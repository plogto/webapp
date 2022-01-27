import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { Modal } from "@components/Modal/components/Modal";

const initialModal = {
  isOpen: false,
  content: null,
};

const ModalContext = createContext<ModalContext>(initialModal);
const ModalContextSetState = createContext<SetModalContext>({
  setIsOpen: () => {},
  setContent: () => {},
});

type Props = {
  children: ReactNode;
};

export function ModalProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState<ModalContext["isOpen"]>(
    initialModal.isOpen,
  );
  const [content, setContent] = useState<ModalContext["content"]>(
    initialModal.content,
  );

  return (
    <ModalContext.Provider value={{ isOpen, content }}>
      <ModalContextSetState.Provider
        value={{
          setIsOpen,
          setContent,
        }}
      >
        <Modal isOpen={isOpen}>{content}</Modal>
        {children}
      </ModalContextSetState.Provider>
    </ModalContext.Provider>
  );
}

function useModalState() {
  const { isOpen, content } = useContext(ModalContext);

  return { isOpen, content };
}

function useModalSetState() {
  const { setIsOpen, setContent } = useContext(ModalContextSetState);

  return { setIsOpen, setContent };
}

export function useModalContext() {
  const { isOpen, content } = useModalState();
  const { setIsOpen, setContent } = useModalSetState();

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return { isOpen, content, setIsOpen, setContent, openModal, closeModal };
}
