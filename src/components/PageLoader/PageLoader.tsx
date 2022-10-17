import classNames from "classnames";
import { PageLoaderHeightType } from "@enums";
import { Loader } from "@components/Loader";
import styles from "./PageLoader.module.css";
import type { PageLoaderProps } from "./PageLoader.types";

export function PageLoader(props: PageLoaderProps) {
  const { heightType = PageLoaderHeightType.NORMAL, className } = props;
  const wrapperClasses = classNames(
    styles.wrapper,
    heightType === PageLoaderHeightType.FULL && styles.isFullHeight,
    heightType === PageLoaderHeightType.NORMAL && styles.isNormalHeight,
    className,
  );

  return (
    <div className={wrapperClasses}>
      <Loader className="w-10 h-10" />
    </div>
  );
}
