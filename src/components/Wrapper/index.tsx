import { ReactNode } from "react";
import styles from "./Wrapper.module.css";

type Props = {
  children?: ReactNode;
};

export function Wrapper({ children }: Props): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}
