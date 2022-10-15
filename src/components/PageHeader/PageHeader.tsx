import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import styles from "./PageHeader.module.css";
import type { PageHeaderProps } from "./PageHeader.types";
import { usePageHeader } from "./usePageHeader";

export function PageHeader(props: PageHeaderProps) {
  const {
    title,
    rightSide,
    description,
    className,
    backLink,
    showBackLink = true,
    isTitleCompact = true,
  } = props;
  const { handleBack } = usePageHeader({ backLink });
  const wrapperClasses = classNames(styles.wrapper, className);
  const headerClasses = classNames(styles.header);
  const titleClasses = classNames(
    styles.title,
    isTitleCompact && styles.isTitleCompact,
  );

  const backIcon = <Icon className={styles.icon} name="ArrowLeft" />;

  return (
    <div className={wrapperClasses}>
      <div className={headerClasses}>
        {showBackLink && (
          <Button onClick={handleBack} className={styles.back}>
            {backIcon}
          </Button>
        )}
        {title && <h2 className={titleClasses}>{title}</h2>}
        {rightSide || <div className={classNames(styles.icon, "px-3")}></div>}
      </div>
      {description}
    </div>
  );
}
