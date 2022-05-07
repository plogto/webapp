import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import type { PageHeaderProps } from "./@types";
import styles from "./PageHeader.module.css";
import { usePageHeader } from "./hooks/usePageHeader";

export function PageHeader(props: PageHeaderProps) {
  const { title, rightSide, className } = props;
  const { handleBack } = usePageHeader();
  const wrapperClasses = classNames(styles.header, className);

  const backIcon = <Icon className={styles.icon} name="ArrowLeft" />;

  return (
    <div className={wrapperClasses}>
      <Button onClick={handleBack} className={styles.back}>
        {backIcon}
      </Button>
      {title && <h2 className={styles.title}>{title}</h2>}
      {rightSide || <div className={classNames(styles.icon, "px-4")}></div>}
    </div>
  );
}
