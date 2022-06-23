export interface ChangeImageProfileProps {
  title: string;
  isOpen: boolean;
  showRemoveButton?: boolean;
  closeModal: () => void;
  removeImage: () => void;
  onClickInputFile: () => void;
}
