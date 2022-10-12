import styles from "../TextEditor.module.css";
import type { DraftDecoratorComponent } from "../TextEditor.types";

export function DecoratorComponent({
  children,
  offsetKey,
}: DraftDecoratorComponent) {
  return (
    <span className={styles.link} data-offset-key={offsetKey}>
      {children}
    </span>
  );
}
