import classNames from "classnames";
import styles from "../../Post.module.css";
import { DateType } from "@enums";
import { useDate } from "@hooks/useDate";
import type { DatePostProps } from "@components/Post/@types";

export function DateTime(props: DatePostProps) {
  const { formatFromNow, isEdited } = useDate();
  const {
    size = "normal",
    type = DateType.SHORT,
    createdAt,
    updatedAt,
  } = props;
  const sizeClasses = styles[size];
  const wrapperClasses = classNames(styles.date, sizeClasses);

  return (
    <span className={wrapperClasses}>
      {formatFromNow({ date: createdAt, type })}
      {isEdited({ createdAt, updatedAt }) && <span> &middot; edited</span>}
    </span>
  );
}
