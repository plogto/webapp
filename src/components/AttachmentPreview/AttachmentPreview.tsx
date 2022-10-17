import { Button } from "@components/Buttons/Button";
import styles from "./AttachmentPreview.module.css";
import type { AttachmentPreviewProps } from "./AttachmentPreview.types";

export function AttachmentPreview(props: AttachmentPreviewProps) {
  const { image, onClickRemoveButton, showRemoveButton = true } = props;
  const src = image ? URL.createObjectURL(image) : null;

  if (src) {
    return (
      <div className={styles.attachmentPreview}>
        {showRemoveButton && (
          <Button onClick={onClickRemoveButton} className={styles.removeButton}>
            Remove
          </Button>
        )}
        {/* TODO: use next image */}
        <img src={src} />
      </div>
    );
  }

  return null;
}
