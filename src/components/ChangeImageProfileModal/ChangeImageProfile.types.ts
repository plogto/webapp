export interface ChangeImageProfileProps {
  title: string;
  isOpen: boolean;
  isShowRemoveButton?: boolean;
  closeModal: () => void;
  removeImage: () => void;
  onClickInputFile: () => void;
}
