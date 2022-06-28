import { Button } from "@components/Buttons/Button";
import styles from "../AddPost.module.css";
import type { AttachmentPreviewProps } from "../AddPost.types";

export function AttachmentPreview(props: AttachmentPreviewProps) {
  const { image, onClickRemoveButton, showRemoveButton = true } = props;
  const src = image ? URL.createObjectURL(image) : null;

  return src ? (
    <div className={styles.attachmentPreview}>
      {showRemoveButton && (
        <Button onClick={onClickRemoveButton} className={styles.removeButton}>
          Remove
        </Button>
      )}
      {/* TODO: use next image */}
      <img src={src} />
    </div>
  ) : (
    <></>
  );
}
