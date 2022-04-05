import styles from "../../AddPost.module.css";
import { Button } from "@components/Buttons/Button";
import type { AttachmentPreviewProps } from "@features/AddPost/@types";

export function AttachmentPreview(props: AttachmentPreviewProps) {
  const { image, onClickRemoveButton } = props;
  const src = image ? URL.createObjectURL(image) : null;

  return src ? (
    <div className={styles.attachmentPreview}>
      <Button onClick={onClickRemoveButton} className={styles.removeButton}>
        Remove
      </Button>
      <img src={src} />
    </div>
  ) : (
    <></>
  );
}
