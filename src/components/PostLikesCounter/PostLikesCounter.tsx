import classNames from "classnames";
import { formatCountTitle } from "@utils/formatter";
import styles from "./PostLikesCounter.module.css";
import type { PostLikesCounterProps } from "./PostLikesCounter.types";

export function PostLikesCounter(props: PostLikesCounterProps) {
  const { size = "normal", likes } = props;
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(styles.likes, sizeClasses);

  const { title, count } = formatCountTitle({
    singular: "Like",
    plural: "Likes",
    count: likes?.totalCount,
  });

  if (count) {
    return (
      <span className={wrapperClasses}>
        <span className={styles.separate}>&middot;</span>
        <strong>{count}</strong> {title}
      </span>
    );
  }

  return null;
}
