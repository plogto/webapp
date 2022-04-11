import classNames from "classnames";
import styles from "./PostDateTime.module.css";
import { DateType } from "@enums";
import { useDate } from "@hooks/useDate";
import { PostDateTimeProps } from "./@types";

export function PostDateTime(props: PostDateTimeProps) {
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
