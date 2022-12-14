import classNames from "classnames";
import { Img } from "@components/Img";
import styles from "./Avatar.module.css";
import type { AvatarProps } from "./Avatar.types";

export function Avatar(props: AvatarProps) {
  const { className, size = "normal", avatar, alt } = props;
  const classes = classNames(styles.avatar, className, styles[size]);

  return avatar ? (
    <div className={classes}>
      <Img
        alt={alt}
        image={{
          ...avatar,
          width: 1,
          height: 1,
        }}
      />
    </div>
  ) : (
    <svg className={classes} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
