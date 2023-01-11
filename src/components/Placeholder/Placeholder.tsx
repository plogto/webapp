import classNames from "classnames";
import { AnimationPattern } from "@enums";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Icon } from "@components/Icon";
import { prepareAnimationClasses } from "@utils/animation";
import styles from "./Placeholder.module.css";
import type { PlaceholderProps } from "./Placeholder.types";

export function Placeholder(props: PlaceholderProps) {
  const { title, icon, description, className, backButton } = props;

  const wrapperClasses = classNames(styles.wrapper, className);
  const motion = prepareAnimationClasses(AnimationPattern.ZOOM_IN);

  return (
    <div className={wrapperClasses}>
      <div className={classNames(styles.iconWrapper, motion)}>
        <Icon name={icon} className={classNames(styles.icon, motion)} />
      </div>
      <div className={classNames(styles.title, motion)}>{title}</div>
      {description && (
        <div className={classNames(styles.description, motion)}>
          {description}
        </div>
      )}
      {backButton && (
        <LinkButton href={backButton.href} className={styles.backButton}>
          {backButton?.title}
        </LinkButton>
      )}
    </div>
  );
}
