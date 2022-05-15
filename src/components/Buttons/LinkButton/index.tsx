import classNames from "classnames";
import styles from "../Buttons.module.css";
import { LinkButtonProps } from "./@types";
import Link from "next/link";

export function LinkButton(props: LinkButtonProps) {
  const { className, layout, children, href } = props;

  const classes = classNames(
    styles.button,
    className,
    layout && styles[layout],
  );

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
}
