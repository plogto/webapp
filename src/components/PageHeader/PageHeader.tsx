import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import styles from "./PageHeader.module.css";
import type { PageHeaderProps } from "./PageHeader.types";
import { usePageHeader } from "./usePageHeader";

export function PageHeader(props: PageHeaderProps) {
  const { title, rightSide, className, backLink } = props;
  const { handleBack } = usePageHeader({ backLink });
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
