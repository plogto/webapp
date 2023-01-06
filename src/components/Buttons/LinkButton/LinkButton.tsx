import classNames from "classnames";
import Link from "next/link";
import styles from "../Buttons.module.css";
import type { LinkButtonProps } from "./LinkButton.types";

export function LinkButton(props: LinkButtonProps) {
  const { className, layout, children, href } = props;

  const classes = classNames(
    styles.button,
    className,
    layout && styles[layout.toLowerCase()],
  );

  return (
    <Link href={href} legacyBehavior>
      <a className={classes}>{children}</a>
    </Link>
  );
}
