import classNames from "classnames";
import styles from "./PageHeader.module.css";
import { usePageHeader } from "./hooks/usePageHeader";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import type { PageHeaderProps } from "./@types";

export function PageHeader(props: PageHeaderProps) {
  const { title, className } = props;
  const { handleBack } = usePageHeader();
  const wrapperClasses = classNames(styles.header, className);

  const backIcon = <Icon className={styles.icon} name="arrowLeft" />;

  return (
    <div className={wrapperClasses}>
      <Button onClick={handleBack} className={styles.back}>
        {backIcon}
      </Button>
      <h2 className={styles.title}>{title}</h2>
      <div className={classNames(styles.icon, "px-4")}></div>
    </div>
  );
}
