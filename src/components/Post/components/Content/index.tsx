import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "../../Post.module.css";
import { Hashtag } from "@components/Hashtag";
import { ContentPostProps } from "@components/Post/@types";
import { useDate } from "@hooks/useDate";
import { usePostParser } from "@hooks/usePostParser";

export function Content(props: ContentPostProps) {
  const { formatFromNow, isEdited } = useDate();
  const { size = "normal", content, createdAt, updatedAt } = props;
  const { parsePost } = usePostParser();
  const sizeClasses = styles[size];

  return (
    <p className={classNames(styles.content, sizeClasses)}>
      {parsePost({
        content,
        hashtagComponent: (value: string) => (
          <Hashtag key={uuid()} value={value} />
        ),
      })}
      <span className={styles.date}>
        {formatFromNow(createdAt)}
        {isEdited({ createdAt, updatedAt }) && <span> &middot; edited</span>}
      </span>
    </p>
  );
}
