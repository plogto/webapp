import classNames from "classnames";
import { v4 as uuid } from "uuid";
import styles from "../../Post.module.css";
import { Hashtag } from "@components/Hashtag";
import { usePostParser } from "@hooks/usePostParser";
import type { Post, PostSize } from "@t/post";

type Props = {
  size: PostSize;
  content: Post["content"];
};

export function Content(props: Props) {
  const { size, content } = props;
  const { parsePost } = usePostParser();
  const sizeClasses = size === "small" && styles.small;

  return (
    <p className={classNames(styles.content, sizeClasses)}>
      {parsePost({
        content,
        hashtagComponent: (value: string) => (
          <Hashtag key={uuid()} value={value} />
        ),
      })}
    </p>
  );
}
