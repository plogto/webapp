import classNames from "classnames";
import Image from "next/image";
import { useMemo } from "react";
import styles from "./Avatar.module.css";
import { useUrls } from "@hooks/useUrls";
import type { AvatarProps } from "./@types";

export function Avatar(props: AvatarProps) {
  const { className, size = "normal", avatar } = props;
  const classes = classNames(styles.avatar, className, styles[size]);
  const { getFileUrl } = useUrls();

  const { width, height } = useMemo(() => {
    switch (size) {
      case "extra":
        return { width: 160, height: 160 };
      case "large":
        return { width: 96, height: 96 };
      case "normal":
        return { width: 48, height: 48 };
      case "small":
        return { width: 36, height: 36 };
      case "tiny":
        return { width: 28, height: 28 };
    }
  }, [size]);

  return avatar ? (
    <div className={classes}>
      <Image width={width} height={height} src={getFileUrl(avatar)} />
    </div>
  ) : (
    <svg className={classes} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}
