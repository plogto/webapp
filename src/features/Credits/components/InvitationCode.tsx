import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AnimationPattern } from "@enums";
import { prepareAnimationClasses } from "@utils/animation";
import styles from "../Credits.module.css";
import type { InvitationCodeProps } from "../Credits.types";

export function InvitationCode(props: InvitationCodeProps) {
  const { invitationCode } = props;
  const { t } = useTranslation("credits");
  const motion = prepareAnimationClasses(AnimationPattern.ZOOM_IN);

  return (
    <div className={styles.invitationCodeWrapper}>
      <div className={styles.title}>{t("texts.invitationCode")}</div>
      <div className={classNames(styles.invitationCode, motion)}>
        {invitationCode?.toUpperCase()}
      </div>
    </div>
  );
}
